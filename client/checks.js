import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
//import { EthJS } from 'ethjs';

ZTKGamersChecks = new Mongo.Collection('ZTKGamersChecks');

import './checks.html';

contractOwnerAddress = "0x232d8AF6FC9396105E11D2E011C795262F20a29a";
contractAddress = "0xC41BbB52df3d97b7EF0E273b10a0Aa01E5ba21Bc";

// TEST CONTRACT DETAILS
// contractSetOwnerAddress = "0x232d8af6fc9396105e11d2e011c795262f20a29a";
// contractOwnerAddress = "0x232d8af6fc9396105e11d2e011c795262f20a29a";
// contractAddress = "0x77Fff9b0d26DDf4876c0eD7Ff401d9DF5a4C0e03";

ABIArray = [
  {
    "constant":true,
    "inputs":[

    ],
    "name":"name",
    "outputs":[
      {
        "name":"",
        "type":"string"
      }
    ],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
  },
  {
    "constant":false,
    "inputs":[
      {
        "name":"_spender",
        "type":"address"
      },
      {
        "name":"_value",
        "type":"uint256"
      }
    ],
    "name":"approve",
    "outputs":[
      {
        "name":"success",
        "type":"bool"
      }
    ],
    "payable":false,
    "stateMutability":"nonpayable",
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[

    ],
    "name":"totalSupply",
    "outputs":[
      {
        "name":"",
        "type":"uint256"
      }
    ],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
  },
  {
    "constant":false,
    "inputs":[
      {
        "name":"_from",
        "type":"address"
      },
      {
        "name":"_to",
        "type":"address"
      },
      {
        "name":"_value",
        "type":"uint256"
      }
    ],
    "name":"transferFrom",
    "outputs":[
      {
        "name":"success",
        "type":"bool"
      }
    ],
    "payable":false,
    "stateMutability":"nonpayable",
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[
      {
        "name":"_address",
        "type":"address"
      }
    ],
    "name":"getZTKCheck",
    "outputs":[
      {
        "name":"",
        "type":"string"
      },
      {
        "name":"",
        "type":"string"
      },
      {
        "name":"",
        "type":"string"
      },
      {
        "name":"",
        "type":"string"
      },
      {
        "name":"",
        "type":"uint256"
      },
      {
        "name":"",
        "type":"string"
      },
      {
        "name":"",
        "type":"string"
      }
    ],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[

    ],
    "name":"decimals",
    "outputs":[
      {
        "name":"",
        "type":"uint256"
      }
    ],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
  },
  {
    "constant":false,
    "inputs":[
      {
        "name":"_value",
        "type":"uint256"
      }
    ],
    "name":"setRatePerOneEther",
    "outputs":[

    ],
    "payable":false,
    "stateMutability":"nonpayable",
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[

    ],
    "name":"getZTKChecks",
    "outputs":[
      {
        "name":"",
        "type":"address[]"
      }
    ],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[

    ],
    "name":"ratePerOneEther",
    "outputs":[
      {
        "name":"",
        "type":"uint256"
      }
    ],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[

    ],
    "name":"issueIndex",
    "outputs":[
      {
        "name":"",
        "type":"uint64"
      }
    ],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[
      {
        "name":"_owner",
        "type":"address"
      }
    ],
    "name":"balanceOf",
    "outputs":[
      {
        "name":"balance",
        "type":"uint256"
      }
    ],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[

    ],
    "name":"owner",
    "outputs":[
      {
        "name":"",
        "type":"address"
      }
    ],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[

    ],
    "name":"symbol",
    "outputs":[
      {
        "name":"",
        "type":"string"
      }
    ],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[
      {
        "name":"",
        "type":"uint256"
      }
    ],
    "name":"ZTKCheckAccts",
    "outputs":[
      {
        "name":"",
        "type":"address"
      }
    ],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
  },
  {
    "constant":false,
    "inputs":[
      {
        "name":"_to",
        "type":"address"
      },
      {
        "name":"_value",
        "type":"uint256"
      }
    ],
    "name":"transfer",
    "outputs":[
      {
        "name":"success",
        "type":"bool"
      }
    ],
    "payable":false,
    "stateMutability":"nonpayable",
    "type":"function"
  },
  {
    "constant":false,
    "inputs":[
      {
        "name":"_beneficiary",
        "type":"address"
      },
      {
        "name":"_accountId",
        "type":"string"
      },
      {
        "name":"_accountNumber",
        "type":"string"
      },
      {
        "name":"_routingNumber",
        "type":"string"
      },
      {
        "name":"_institution",
        "type":"string"
      },
      {
        "name":"_fullname",
        "type":"string"
      },
      {
        "name":"_amount",
        "type":"uint256"
      },
      {
        "name":"_checkFilePath",
        "type":"string"
      },
      {
        "name":"_digitalCheckFingerPrint",
        "type":"string"
      },
      {
        "name":"_tokens",
        "type":"uint256"
      }
    ],
    "name":"registerZTKCheck",
    "outputs":[

    ],
    "payable":true,
    "stateMutability":"payable",
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[

    ],
    "name":"moneyWallet",
    "outputs":[
      {
        "name":"",
        "type":"address"
      }
    ],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[

    ],
    "name":"totalZTKCheckAmounts",
    "outputs":[
      {
        "name":"",
        "type":"uint256"
      }
    ],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[

    ],
    "name":"tokenSupplyFromCheck",
    "outputs":[
      {
        "name":"",
        "type":"uint256"
      }
    ],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
  },
  {
    "constant":false,
    "inputs":[
      {
        "name":"_beneficiary",
        "type":"address"
      }
    ],
    "name":"purchaseTokens",
    "outputs":[

    ],
    "payable":true,
    "stateMutability":"payable",
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[
      {
        "name":"_owner",
        "type":"address"
      },
      {
        "name":"_spender",
        "type":"address"
      }
    ],
    "name":"allowance",
    "outputs":[
      {
        "name":"remaining",
        "type":"uint256"
      }
    ],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
  },
  {
    "constant":false,
    "inputs":[
      {
        "name":"_address",
        "type":"address"
      }
    ],
    "name":"setMoneyWallet",
    "outputs":[

    ],
    "payable":false,
    "stateMutability":"nonpayable",
    "type":"function"
  },
  {
    "constant":false,
    "inputs":[
      {
        "name":"_newOwner",
        "type":"address"
      }
    ],
    "name":"transferOwnership",
    "outputs":[

    ],
    "payable":false,
    "stateMutability":"nonpayable",
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[

    ],
    "name":"countZTKChecks",
    "outputs":[
      {
        "name":"",
        "type":"uint256"
      }
    ],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[

    ],
    "payable":false,
    "stateMutability":"nonpayable",
    "type":"constructor"
  },
  {
    "payable":true,
    "stateMutability":"payable",
    "type":"fallback"
  },
  {
    "anonymous":false,
    "inputs":[
      {
        "indexed":false,
        "name":"issueIndex",
        "type":"uint64"
      },
      {
        "indexed":false,
        "name":"addr",
        "type":"address"
      },
      {
        "indexed":false,
        "name":"tokenAmount",
        "type":"uint256"
      }
    ],
    "name":"Issue",
    "type":"event"
  },
  {
    "anonymous":false,
    "inputs":[
      {
        "indexed":false,
        "name":"chequeIndex",
        "type":"string"
      }
    ],
    "name":"ZTKCheckIssue",
    "type":"event"
  },
  {
    "anonymous":false,
    "inputs":[
      {
        "indexed":true,
        "name":"from",
        "type":"address"
      },
      {
        "indexed":true,
        "name":"to",
        "type":"address"
      },
      {
        "indexed":false,
        "name":"value",
        "type":"uint256"
      }
    ],
    "name":"Transfer",
    "type":"event"
  },
  {
    "anonymous":false,
    "inputs":[
      {
        "indexed":true,
        "name":"owner",
        "type":"address"
      },
      {
        "indexed":true,
        "name":"spender",
        "type":"address"
      },
      {
        "indexed":false,
        "name":"value",
        "type":"uint256"
      }
    ],
    "name":"Approval",
    "type":"event"
  }
];


coinValueInDollar = 0.25;

Template.checks.onCreated(function onCreated(){
  
  if (typeof web3 !== 'undefined') {
    web3js = new Web3(web3.currentProvider);

  } else {

    alert('Please install metamask.');
  }
  

  var template = this;
  
  this.uBetCoinName = new ReactiveVar(0);
  this.totalZTKCheckAmounts = new ReactiveVar(0);
      
})
 
Template.checks.events({

  'submit form.new-ztkcheck'(event) {
  
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
    
    ztkGamersContract = web3.eth.contract(ABIArray).at(contractAddress);
    
    var ZTKGamersCheckRecID = "1029393";
    

    console.log("beneficiaryAddress: " + beneficiaryAddress );
    console.log("accountNumber: " + accountNumber);
    console.log("routingNumber: " +  routingNumber);
    console.log("institution: " + institution);
    console.log("fullName: " + fullName);
    
    console.log("FileHash: " + fileHash);
    console.log("tokenPurchase: " + tokenPurchase);
    
    ztkGamersContract.registerZTKCheck.sendTransaction(beneficiaryAddress, ZTKGamersCheckRecID, accountNumber, routingNumber, institution, fullName, amount, checkFilePath, fileHash, tokenPurchase, {
      from: web3.eth.accounts[0],
      gas: 800000 },function (err, res){
        
        if(!err){
          
          console.log("SEND TRANSACTION RESULT: ");
          console.log(res);
          
          var ZTKGamersCheckRecID = ZTKGamersChecks.insert({
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
          // ZTKGamersChecks.remove({ _id: ZTKGamersCheckRecID});
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
      lbl.html(totalCoin + " ZTK");
      
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



