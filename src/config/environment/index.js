/**************************
 *  ENVIRONMENT VARIABLES 
**************************/
module.exports = {
   //databaseUrl: 'mongodb+srv://admin:admin123@cluster0.5jwzc.mongodb.net/mishmash_dev?authSource=admin',
   BaseUrl: 'http://localhost:5000',
   // BaseUrl: 'http://44.195.125.80:5000',
   jwtTokenInfo: {
       secretKey: '9889D22341540031D3386132A7BDD38F4830474543C795D019561C0A308F502B',
       issuer: 'Mishmash',
       audience: 'localhost:8080',
       algorithm: 'HS256',
       expiresIn: '8760h'
   },
   adminJwtTokenInfo: {
       secretKey: '1FF5C1ED994DEE6CE4123DC0262A78DFCE3E39618FB96E72D4F8840EDBFE9179',
       issuer: 'Structure',
       audience: 'localhost:8080',
       algorithm: 'HS256',
       expiresIn: '1h'
   },
   emailTokenInfo: {
       secretKey: 'C094434C7F4F7893C24C7E098CB3C0E91310A2B688372F3DA986D14BAF6B1BDQ',
       issuer: 'Structure',
       audience: 'localhost:8080',
       algorithm: 'HS256',
       expiresIn: '1h'
   },
   mobileTokenInfo: {
       secretKey: '929FFGG453ERYUI456JKL00KIL42001926589GFGJKDHJJSBJ65568BBHHFSJS90',
       issuer: 'Structure',
       audience: 'localhost:8080',
       algorithm: 'HS256',
       expiresIn: '1h'
   },
   passwordResetTokenInfo: {
       secretKey: '50520F727971BEE4F5E7FAB94A61E91FCEE5BB6AB796C0B7EC9CF40991C39F74',
       issuer: 'Structure',
       audience: 'localhost:8080',
       algorithm: 'HS256',
       expiresIn: '1h'
   },
   emailServiceInfo: {
       senderEmail: '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',
       senderPassword: ' IDontKnow1@',
       service: 'SendGrid'
   },
   bcrypt: {
       saltValue: 8
   },
   crypto: {
       secretKey: ''
   },
  
   aws: {
       accessKeyId: '',
       secretAccessKey: '',
       region: '',
       s3Bucket: '',
       s3AvatarBucket: ''
   },
   socialLogin: {
       google_client_id: '',
       facebook_client_id: '',
       facebook_client_secret: ''
   },
   /*stripe: {
       secretKey: '',
       webhook_secret: ''
   },*/
   upload_path: 'public/uploads',
   /**
    * Payumoney setup
    * */
};