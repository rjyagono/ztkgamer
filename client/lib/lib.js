// web3.eth.getBlock(48, function(error, result){
//  if(!error)
//    console.log(result)
//  else
//    console.error(error);
// })


var web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");

S3.config = {
	key: 'AKIAJQN6HWIUJ3ZPULUA',
	secret: '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',
	bucket: 's3-ubetcoin-user-signatures',
	region: 'us-east-1' // Only needed if not "us-east-1" or ""
};