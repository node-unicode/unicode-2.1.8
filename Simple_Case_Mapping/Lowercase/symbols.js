module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))