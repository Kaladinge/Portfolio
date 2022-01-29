export const projectUrl = "https://qf8a6dvg.api.sanity.io/v1/data/query/production?query=%20*%5B%20_type%20%3D%3D%20'post'%5D%20%7B%0A%20%20%20title%2C%20%0A%20%20%20author-%3E%7Bname%7D%2C%0A%20%20%20excerpt%2C%0A%20%20%20categories%5B%5D-%3E%7Btitle%7D%2C%0A%20%20%20%22imageUrl%22%3A%20mainImage.asset-%3Eurl%2C%0A%20%20%20position%2C%0A%20%20%20logo_position%2C%0A%20%20%20%22logoImageUrl%22%3A%20logoImage.asset-%3Eurl%2C%0A%20%20%20link%0A%20%7D";

/*
 *[ _type == 'post'] {
   title, 
   author->{name},
   excerpt,
   categories[]->{title},
   "imageUrl": mainImage.asset->url,
   position,
   logo_position,
   "logoImageUrl": logoImage.asset->url,
 }
 
 portfoliolarsie.sanity.studio
 
 /Users/larsie/portfolio*/