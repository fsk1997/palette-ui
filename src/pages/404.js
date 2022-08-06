import React from 'react'
import HomeLayout from "../components/Layouts/HomeLayout";
import Seo from "../components/Seo";
import {Link} from "gatsby"

const NotFound = () => {
    return (
        <HomeLayout
            heroFirstLine={"The Page That"} 
            heroSecondLine={"You're Looking For"} 
            heroThirdLine={"Is Not Found"} 
            heroDescription={"Learn about the amazing things we do for the Web."} 
            heroButtonElement={<Link className="btn btn-plum" to="/" title="Visit Homepage">Visit Homepage</Link>}
            newsletterSection={false}
        >
            <Seo/>
            <div className="py-10" />
        </HomeLayout>
    )
}

export default NotFound