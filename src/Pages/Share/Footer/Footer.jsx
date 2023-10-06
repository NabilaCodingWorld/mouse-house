import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div> 
            <div className='divider text-4xl font-bold my-20'>My Prefarable <span className='text-orange-700 animate-pulse'>Youtube</span> Channel</div> 

            <div className='bg-color-footer p-20'>
                <div className='grid md:grid-cols-2 gap-10'> 
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/iZ94H7jBP7U?si=CEddQsYR2AxJ3Qnp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Gd1V_0ZEZ7w?si=lXnXVZT0A2_odRkh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


                    <iframe width="560" height="315" src="https://www.youtube.com/embed/poI0TH1Ii3k?si=5KvhsE7QxaMfiHno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/I4wKjawyt5g?si=3mhy4WfyROvAe7Jz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/U0owrZf7hfQ?si=dvNNTUs2x1FnDF79" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/3IK17uouSNE?si=51i4W936csAPSm-a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Footer;