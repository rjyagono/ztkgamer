import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
//import { EthJS } from 'ethjs';

UBetChecks = new Mongo.Collection('ubetchecks');

import './checks.html';

contractSetOwnerAddress = "";

contractOwnerAddress = "";
contractAddress = "";

// TEST CONTRACT DETAILS
// contractSetOwnerAddress = "0x232d8af6fc9396105e11d2e011c795262f20a29a";
// contractOwnerAddress = "0x232d8af6fc9396105e11d2e011c795262f20a29a";
// contractAddress = "0x77Fff9b0d26DDf4876c0eD7Ff401d9DF5a4C0e03";

ABIArray = [];


coinValueInDollar = 0.25;

Template.checks.onCreated(function onCreated(){
  
  if (typeof web3 !== 'undefined') {
    web3js = new Web3(web3.currentProvider);

  } else {

    alert('Please install metamask.');
  }
  

  var template = this;
  
  this.uBetCoinName = new ReactiveVar(0);
  this.totalUBetCheckAmounts = new ReactiveVar(0);
      
})

Template.checks.helpers({

  // template: Template.instance(),
  // uBetCheckContract: web3.eth.contract(ABIArray).at(contractAddress),
  
  coinValueInDollar(){
    return coinValueInDollar;
  },
  
  coinBase(){
    return web3.eth.accounts[0];
  },
  
  coinContractAddress(){ return contractAddress },
  
  coinContractOwnerAddress() { return contractOwnerAddress },
  
  uBetCoinName(){

    var template = Template.instance();

    uBetCheckContract = web3.eth.contract(ABIArray).at(contractAddress);

    uBetCheckContract.name(function(err, res){
      console.log("COIN NAME");
      console.log(res);
      TemplateVar.set(template, 'uBetCoinName', res);

      return res;
    })
  },
  
  totalUBetCoinDistributed(){

    var template = Template.instance();

    uBetCheckContract = web3.eth.contract(ABIArray).at(contractAddress);

    uBetCheckContract.tokenSupplyFromCheck(function(err, res){
      
      // __coin = Math.floor( res / (10**18) );
      __coin = res;
      
      TemplateVar.set(template, 'totalUBetCoinDistributed', __coin);

      return __coin;
    })

  },

  totalUBetCheckAmounts(){

    var template = Template.instance();

    uBetCheckContract = web3.eth.contract(ABIArray).at(contractAddress);

    uBetCheckContract.totalUBetCheckAmounts(function(err, res){
      console.log("TOTAL AMOUNT UBET CHECK");
      console.log(res);
      TemplateVar.set(template, 'totalUBetCheckAmounts', res);

      return res;
    })

  },
  
  validMetaMaskAddress(){
    return (contractSetOwnerAddress.toLowerCase() == web3.eth.accounts[0]);    
  },
  
  setContractOwnerAddress(){
    var template = Template.instance();
    uBetCheckContract = web3.eth.contract(ABIArray).at(contractAddress);
    
    uBetCheckContract.owner(function(err, res){
      console.log("contract Adddress");
      console.log(res);
      
      TemplateVar.set(template, 'setContractOwnerAddress', res);
      return res;
    })
    
    
  },

  uBetChecks() {
    return UBetChecks.find({})
  },

  files() {
    return S3.collection.find();
  },
  
  ubetCheckTxStatus(txHash){
        
    var _status = "PENDING";
    
    web3.eth.getTransactionReceipt(txHash, function(err, res){
      
      console.log(res);
      
      if(res == null){
        _status =  "PENDING"
      }else if(res.status == "0x1"){
        _status = "SUCCESS"
      }else if(res.status == "0x0") {
        _status = "FAILED"
      }
  
      $("#status-" + txHash).html(_status);
      
    });
    
  }
  
  
})

Template.checks.events({

  'submit form.new-ubetcheck'(event) {
  
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element

    const target = event.target;

    const accountNumber = target.accountNumber.value;
    const beneficiaryAddress = target.beneficiaryAddress.value;
    const routingNumber = target.routingNumber.value;
    const institution = target.institution.value;
    const fullName = target.fullName.value;
    const amount = target.amount.value;
    var checkFilePath = target.checkFilePath.value;
    var fileHash = target.fileChecksum.value;
    var tokenPurchase = Math.floor(amount / coinValueInDollar);
    
    uBetCheckContract = web3.eth.contract(ABIArray).at(contractAddress);
    
    var uBetCheckRecID = "1029393";
    

    console.log("beneficiaryAddress: " + beneficiaryAddress );
    console.log("accountNumber: " + accountNumber);
    console.log("routingNumber: " +  routingNumber);
    console.log("institution: " + institution);
    console.log("fullName: " + fullName);
    
    console.log("FileHash: " + fileHash);
    console.log("tokenPurchase: " + tokenPurchase);
    
    uBetCheckContract.registerUBetCheck.sendTransaction(beneficiaryAddress, uBetCheckRecID, accountNumber, routingNumber, institution, fullName, amount, checkFilePath, fileHash, tokenPurchase, {
      from: web3.eth.accounts[0],
      gas: 800000 },function (err, res){
        
        if(!err){
          
          console.log("SEND TRANSACTION RESULT: ");
          console.log(res);
          
          var uBetCheckRecID = UBetChecks.insert({
            beneficiaryAddress: beneficiaryAddress,
            accountNumber: accountNumber,
            routingNumber: routingNumber,
            institution: institution,
            fullName: fullName,
            amount: amount,
            tokenPurchase: tokenPurchase,
            fileHash: fileHash,
            filePath: checkFilePath,
            txHash: res,
            createdAt: new Date()
          });
          
          // Clear form
          target.accountNumber.value = '';
          target.routingNumber.value = '';
          target.institution.value = '';
          target.fullName.value = '';
          target.amount.value = '';
          target.fileChecksum.value = '';
          tokenPurchase = 0;
          
        } else{
          // Encountered Error so delete delete.
          // UBetChecks.remove({ _id: uBetCheckRecID});
          alert("Please make sure you login to the MetaMask.");
        }
    });
  
  },
  
  'change .file_bag'(event) {
        
    var files = $("input.file_bag")[0].files
    
    $(".loader").show()
    
    calculate();
        
    S3.upload({
        files:files,
        path: "cheques"
      
      },function(e,r){
        
        $(".loader").hide();
        $("#check-file-path").val(r.url);
        
    });
  },
  
  'keyup .amount'(event){
    var amount = $(".amount").val();
    var lbl = $(".token-convetion-lbl");
    
    if(!(amount != "") || amount > 0.25){
      
      var totalCoin = Math.floor(amount/coinValueInDollar);
      lbl.html(totalCoin + " UBETCOIN");
      
    }else{
      lbl.html("0 UBETCOIN")
      
    }
    
  },
  
  
  'click .verify-record-link'(event){
    
    var beneficiaryAddress =  $(".beneficiary-address").val();
    var accountNumber = $(".account-number").val();
    var routingNUmber = $(".routing-number").val();
    var bankName = $(".bank-name").val();
    var fullName = $(".fullname").val();
    var amount = $(".amount").val();
    var checkPath = $("#check-file-path").val();
    var tokenCount = $(".token-convetion-lbl").html();
    
    $(".ver-beneficiary-address").val(beneficiaryAddress);
    $(".ver-account-number").val(accountNumber);
    $(".ver-routing-number").val(routingNUmber);
    $(".ver-bank-name").val(bankName);
    $(".ver-fullname").val(fullName);
    $(".ver-amount").val(amount);
    $('.ver-token-to-send').val(tokenCount);
    
    $(".ver-digital-image").attr("src", checkPath);
    
    $(".show-modal-btn").trigger('click');
    
  },
  
  'click .modal-register-btn'(event){
    console.log("hello");
    $(".new-register-btn").trigger('click');
    $(".show-modal-btn").trigger('click');
  }
  
});



