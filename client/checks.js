import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
//import { EthJS } from 'ethjs';

UBetChecks = new Mongo.Collection('ubetchecks');

import './checks.html';
 
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



