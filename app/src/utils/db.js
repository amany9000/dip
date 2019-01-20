
const driver = require('bigchaindb-driver')
const IPFS = require('ipfs')
const Repo = require('ipfs-repo')
const repo = new Repo('/tmp/ipfs-repo')
const fs  = require("fs")


const node = new IPFS({ repo: repo })
 
const conn = new driver.Connection('https://test.bigchaindb.com/api/v1/')

//const alice = new driver.Ed25519Keypair()
//console.log(alice)
 
let broadCast = function (type, path, name, category, owner, public, private,callback){
	
	node.on('ready', () => {
  	// Your node is now ready to use \o/
	
	let file = fs.readFileSync(path); // Read Provided File  	
	let buf = new Buffer(file);
  	
  	console.log("b",buf)
	
	node.add(buf, { recursive: true}, (err, result) => {
  		if (err) { callback(err)}
  			console.log(result)
  			if(result && (result[0]) && (result[0].path)){
  			let asset =
						{
						"type": type,	
						"name": name,
    					"datetime": new Date().toString(),
    					"category": category,
    					"owner": owner,	
    					"ipfsPath": result[0].hash	
    					}

			const tx = driver.Transaction.makeCreateTransaction(
				asset,
			    null,
			    [ driver.Transaction.makeOutput(
			        driver.Transaction.makeEd25519Condition(public))],
			    public)
			const txSigned = driver.Transaction.signTransaction(tx, private)
			conn.postTransactionCommit(txSigned).then(() => {callback(txSigned.id)})
	
  			}
	})
  	

  	// stopping a node
  	node.stop(() => {
  	  // node is now 'offline'
  	})  	
 })
}



let query = function async (public,callback) {
	node.on('ready', () => {
		let reply = [];
		conn.listOutputs(public, false).then((unspentOutputs) => {
			for(let i in unspentOutputs){
				conn.getTransaction(unspentOutputs[i].transaction_id).then((result) => {
					if(result){
	  						if(result && (result.asset) && (result.asset.data))
	  						reply.push(result.asset.data) 		
							if(result.asset.data.ipfsPath){
								node.get(result.asset.data.ipfsPath, function (err, files) {
	  							files.forEach((file) => {
	  							  	if(file.content){
		  								if(unspentOutputs[i] == unspentOutputs[unspentOutputs.length - 1])
			  								console.log("re",file.content)
	  										callback(reply,file.content);
							  			}
	  								})
	  							})
							}
						}
				})
			}
		})
	
	  node.stop(() => {
	    // node is now 'offline'
	  })	
	})
}


query("CzWKAz4TJnXm6gVffMduP12sAPM1PPfTx6jaF2MWjj8T", (reply, image) => {
	console.log("rep",reply, image)
})

/*

broadCast("IP",../../public/favicon.ico","Catalyst Business Process", "Non-Fiction", "Dipu RBwala", "CzWKAz4TJnXm6gVffMduP12sAPM1PPfTx6jaF2MWjj8T", "B7Vsp2KwYDUHJ9BfnQdvgYywLWpig35RM3HTpwTfGGR", (reply) => {
	console.log("b", reply)
})
*/

addMapping = function async(){
	node.on('ready', () => {
  // Your node is now ready to use \o/
  	/*
	node.addFromFs('./fs', { recursive: true}, (err, result) => {
  		if (err) { throw err }
  			console.log(result)
	})
 	*/
  	
	node.get("QmPetTJShVSbgvHygewbEE1gtNDDLFMqy9pyuQ1tPj7QBK", function (err, files) {
  		console.log(files)
  		files.forEach((file) => {
    	console.log(file.path)
    	if(file.content){
    	 	 fs.writeFile(`${file.name}.jpg`, file.content, 'binary', function(err) {
           if(err){throw err;}
        	})
          }
  		})
  	})
  	// stopping a node
  		node.stop(() => {
   		// node is now 'offline'
  		})
	})
}

getMapping = function async(){
	node.on('ready', () => {
  // Your node is now ready to use \o/
  	/*
	node.addFromFs('./fs', { recursive: true}, (err, result) => {
  		if (err) { throw err }
  			console.log(result)
	})
 	*/
  	
	node.get("QmPetTJShVSbgvHygewbEE1gtNDDLFMqy9pyuQ1tPj7QBK", function (err, files) {
  		console.log(files)
  		files.forEach((file) => {
    	console.log(file.path)
    	if(file.content){
    	 	 fs.writeFile(`${file.name}.jpg`, file.content, 'binary', function(err) {
           if(err){throw err;}
        	})
          }
  		})
  	})
  	// stopping a node
  		node.stop(() => {
   		// node is now 'offline'
  		})
	})
}


module.exports = {query, broadCast};
