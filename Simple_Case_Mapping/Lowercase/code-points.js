module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))