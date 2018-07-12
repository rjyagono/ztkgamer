// web3.eth.getBlock(48, function(error, result){
//  if(!error)
//    console.log(result)
//  else
//    console.error(error);
// })


var web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");

S3.config = {
	key: 'AKIAIOWDXS3PQFEOL37A',
	secret: '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',
	bucket: 's3-ztktoken-user-signatures',
	region: 'us-east-1' // Only needed if not "us-east-1" or ""
};