module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))