import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';



const Social = () => {
  return (
    <>
    <ul className=' flex justify-center my-24 social'>
      <li><button className="ancla" ><FacebookIcon color="secondary" sx={{fontSize:'100px', mx:'2rem', boxShadow:'5px'}}/></button></li>
      <li><button className="ancla" ><InstagramIcon color="secondary" sx={{fontSize:'100px', mx:'2rem', boxShadow:'5px'}}/></button></li>
      <li><button className="ancla" ><RedditIcon color="secondary" sx={{fontSize:'100px', mx:'2rem', boxShadow:'5px'}}/></button></li>
      <li><button className="ancla" ><TwitterIcon color="secondary" sx={{fontSize:'100px', mx:'2rem', boxShadow:'5px'}}/></button></li>

    </ul>
    </>
  )
}

export default Social