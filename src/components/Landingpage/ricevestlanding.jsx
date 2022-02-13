import Header from '../header';


export default function Ricevestlanding() {
    return <>

        <section className="container-fluid" >

             
                {/* <!-- navba expand is used to make the bav item to place itself orizontally on the larg screen and vertically on small screen --> */}
                <Header />
                <div className="row">
                    <div className=" col-lg-6 ">
                        <img className="titlleeli" src="images/Elilips.png" alt="iphone-mockup" />
                        <h1 className="headlines"> Dollar investments that help you grow.</h1>
                        <p className="parag">We put your money in high quality assets that help you build wealth and achieve your financial goals.</p>

                        <a href="/risevest" className="btn  Download" role="button"><i className="fab fa-apple"></i> <sup>download on the</sup><br /> App Store</a>
                        <a className="btn  Download" type="button"><i className="fab fa-google-play"></i><sup>download on the</sup><br /> Google Play </a>
                        <img className=" titelimg3" src="images/Elilips.png" alt="iphone-mockup" />
                    </div>
                    <div className="col-lg-6">
                        <img className=" titlleeli2" src="images/Elilips.png" alt="iphone-mockup" />
                        <img className="titleimage" src="images/Subtract.png" alt="iphone-mockup" />
                        <img className=" titlelips" src="images/Elilips.png" alt="iphone-mockup" />

                    </div>
                </div>
             
        </section>
        {/* <!-- Press --> */}

        <section id="press">
            <img className="press-img" src="images/arm.jpg" alt="tc-logo" />
            <img className="press-img" src="images/western.png" alt="tnw-logo" />
            <img className="press-img" src="images/techstar.png" alt="biz-insider-logo" />
            <img className="press-img" src="images/ventures.png" alt="mashable-logo" />

        </section>
        <div className='container-fluid'>
            <div className="row">
                <div className="  titleposition col-lg-6">

                    <h3 className="headlines2"> Invest your money in dollars</h3>
                    <p className="parag2">By holding your investments in a stable currency, your money grows more over time and retains its value better.</p>
                    <a href="/risevest" className=' startinvesting ps-1'>Start investing now  <i className="fal fa-long-arrow-right"></i> </a>

                </div>
                <div className="col-lg-6">

                    <img className="image" src="images/file1.png" alt="iphone-mockup" />


                </div>
            </div>
            <div className="row">
                <div className="  titleposition col-lg-6">
                    <img className="image" src="images/file3.png" alt="iphone-mockup" />



                </div>
                <div className="col-lg-6">


                    <h3 className="headlines2"> Choose what's best for you</h3>
                    <p className="parag2">Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place.  </p>
                    <a href="/risevest" className=' startinvesting ps-1'>Start investing now  <i className="fal fa-long-arrow-right"></i> </a>

                </div>
            </div>
            <div className="row">
                <div className="  titleposition col-lg-6">

                    <h3 className="headlines2"> Set goals and reach them</h3>
                    <p className="parag2">You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them. </p>
                    <a href="/risevest" className=' startinvesting ps-1'>Start investing now  <i className="fal fa-long-arrow-right"></i> </a>

                </div>
                <div className="col-lg-6">

                    <img className="image" src="images/file2.png" alt="iphone-mockup" />


                </div>
            </div>
            <div className="row">
                <div className="  titleposition col-lg-6">
                    <img className="image" src="images/file5.png" alt="iphone-mockup" />



                </div>
                <div className="col-lg-6">


                    <h3 className="headlines2"> We remember so you dont have to</h3>
                    <p className="parag2">Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule. </p>
                    <a href="/risevest" className=' startinvesting ps-1'>Start investing now  <i className="fal fa-long-arrow-right"></i> </a>

                </div>
            </div>
        </div>
        {/* <!-- Pricing --> */}

        <section id="pricing">

            <h2 className='features'>Asset Classes </h2>
            <p className='featurep'>It's your money, choose where you invest it</p>
            <div className="row">
                <div className="pricing-column col-lg-4 col-md-12">
                    <div className="card">
                        <div className=" cardheader card-header">
                            <img className="imagepos " src="images/Ellipse2.png" alt="iphone-mockup" />
                        </div>

                        <div className=" cardbody card-body">
                            <h3 className=' featurebody'>Stocks</h3>
                            <p className='featurep'>We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.
                            </p>

                            <p className='featurep'><span className='featuresp'>Historical returns:</span>  14% per annum </p>
                            <p className='featurep'><span className='featuresp' >Risk Level:</span>Medium</p>
                            <a href="/risevest" className=' startinvesting ps-1'>Learn how Stocks work <i className="fal fa-long-arrow-right"></i> </a>
                        </div>
                    </div>
                </div>
                <div className=" pricing-column col-lg-4 col-md-12">
                    <div className="card">
                        <div className=" cardheader2 card-header">
                            <img className="imagepos " src="images/Ellipse3.png" alt="iphone-mockup" />
                        </div>
                        <div className=" cardbody card-body">
                            <h3 className=' featurebody'>Real Estate</h3>
                            <p className='featurep'>Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.
                            </p>

                            <p className='featurep'><span className='featuresp'>Historical returns:</span>  14% per annum </p>
                            <p className='featurep'><span className='featuresp' >Risk Level:</span>Medium</p>
                            <a href="/risevesy" className=' startinvesting ps-1'>Learn how Real Estate work <i className="fal fa-long-arrow-right"></i> </a>
                        </div>
                    </div>
                </div>
                <div className=" pricing-column col-lg-4 col-md-12">
                    <div className="card">
                        <div className="cardheader3 card-header">

                        </div>
                        <img className="imagepos " src="images/Ellipse4.png" alt="iphone-mockup" />
                        <div className=" cardbody card-body">
                            <h3 className=' featurebody'>Fixed Income</h3>
                            <p className='featurep'>A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.

                            </p>
                            <p className='featurep'><span className='featuresp'>Historical returns:</span>  14% per annum </p>
                            <p className='featurep'><span className='featuresp' >Risk Level:</span>Medium</p>
                            <a href="" className=' startinvesting ps-1'>Learn how Fixed Income work <i className="fal fa-long-arrow-right"></i> </a>
                        </div>
                    </div>

                </div>

            </div>
        </section>


      

<section >
    <div className='container-fluid'>
        <div className="row">
                    <div className="    col-lg-6">
                    <img className="assessimage" src="images/Subtract.png" alt="iphone-mockup" />
                    
                    <img className="assessimage2" src="images/Build.png" alt="iphone-mockup" />
                    
                        
                       
                    </div>
                    <div className="col-lg-6">
                         
                      
                    <h4 className="headlines3"> <p className='riseappp'>The  Rise App</p> Save for your <span className='futurecolor'> future.</span></h4>
                        <p className="parag">With Rise, you achieve your financial goals faster. Save for school, your home, vacations, your children's future and more.
</p>

                        <a href="" className="btn button" role="button"> Start Saving</a>
                    
                    </div>
                </div>

                </div>

                </section>
<section>
    <div className='container-fluid regulatedback'>
                <div className="col-12 regulated">
                    <h1 className="text-center">How we are Regulated</h1>
                    
                        <p className="paragraph text-center">Rise is registered and regulated both in the US and in Nigeria. Our team is made up of US registered investment advisers, our Nigerian users are covered by our SEC licensed trustees, ARM Trustees and all our assets are held with regulated third parties, in all relevant jurisdictions
                         
                        
                    </p>
                        
                        
                       
                    </div>
                    </div>
                    </section>

                  {/* <!-- Features --> */}

        <section id="features">
            <div className='container-fluid'>
                <div className=' regulated'>
            <h1 className="text-center mission ">From The People Who Use Rise</h1>
                    
                    <p className=" text-center">Our mission at Risevest is to empower more people just like you to achieve your personal financial goals.
                     
                    
                </p>
                </div>
            <div className="row">
           
                    
                <div className="feature-box   col-lg-4">

                     
                    <p> I don't want to invest in separate stocks because I'm not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable. </p>
                     
                    <div className='mt-5'> <img className="testimonials  me-2 " src="images/Ellipse5.png" alt="iphone-mockup" /> <small>Jesse</small></div>
                </div>

                <div className="feature-box col-lg-4">
                   
                    
                    
                    <p>I don't want to invest in separate stocks because I'm not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.</p>
                   <div className='mt-5'> <img className="testimonials  me-2 " src="images/Ellipse5.png" alt="iphone-mockup" /> <small>Jesse</small></div>
                </div>
                <div className="feature-box col-lg-4    ">
                    
                     
                    <p>I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that's at an all-time high in Nigeria.</p>
                    <img className="testimonials me-2 " src="images/Ellipse6.png" alt="iphone-mockup" /><small>Raye</small>
                </div>
            </div>
            </div>
        </section>
<section>
    <div className='container-fluid'>
    <div className="row">
                <div className="  titleposition col-lg-6">

                    <h3 className="headlines2">Join The Rise Community</h3>
                    <p className="parag2">If you want to go far, go together. Our Telegram community surrounds you with others who can help you along your financial journey with tips, support, advice and learning. It's completely free and open to new and seasoned investors.</p>
                    <a href="" className="btn button2" role="button"> Start Saving</a>

                </div>
                <div className="col-lg-6">

                    <img className="goal" src="images/screen.png" alt="iphone-mockup" />


                </div>
            </div>
    </div>
</section> 
<div className='container-fluid ads'>
<div className="row">
                    <div className="  titleposition col-lg-6">
                        
                        <h3 className="headlines2">Join our 100,000 users investing and setting long term goals!.</h3>
                        <p className="parag">Dollar investments that help you grow.</p>

                        <a href=".risevest" className="btn  Download" role="button"><i className="fab fa-apple"></i> <sup>download on the</sup><br /> App Store</a>
                        <a className="btn  Download" type="button"><i className="fab fa-google-play"></i><sup>download on the</sup><br /> Google Play </a>
                        
                    </div>
                    <div className="col-lg-6">
                         
                        <img className="lastimage" src="images/Subtract.png" alt="iphone-mockup" />
                       

                    </div>
                </div>
                </div>

        {/* 
 

        {/* <!-- Footer -->  */}

        <footer className='containter-fluid' id="footer">
            <div className="row ">
              <div className="col-lg-3 col-md-6">
                  <ul className='footerul'>
                      
                      <li className='footerliheader' >
                      rise<sup>.</sup>
                      </li>
                      <li  className='footerli' >
                      About Us
                      </li>
                      <li className='footerli'>
                      Careers
                      </li>
                      <li className='footerli'>
                      FAQs
                      </li>
                      <li className='footerli'>
                      Contact Info
                      </li>
                      <li className='footerli'>
                      Press
                      </li>
                      <li className='footerli'>
                      Rise Impact
                      </li>

                  </ul>
              </div>
              <div className="col-lg-3 col-md-6">
              <ul className='footerul'>
                      
                      <li className='footerliheader2'>
                      
                      Explore
                      </li>
                      <li className='footerli'>
                      Investmet Club
                      </li>
                      <li className='footerli'>
                      Blog
                      </li>
                       
                  </ul>
              </div>
              <div className="col-lg-3 col-md-6">
              <ul className='footerul'>
                      
                      <li className='footerliheader2'>
                      Products
                      </li>
                      <li className='footerli'>
                      Rise App
                      </li>
                      <li className='footerli'>
                      Wallets
                      </li>
                      <li className='footerli'>
                      Asset Classes
                      </li>
                     

                  </ul>
              </div>
              <div className="col-lg-3 col-md-6">
              <ul className='footerul'>
                      
                      <li className='footerliheader2'>
                      Contact Us
                      </li>
                      <li className='footerli'>
                      0818 714 7405
                      </li>
                      <li className='footerli'>
                      Newsletter </li>
                      <li className='footerli'>
                      Instagram
                      </li>
                      <li className='footerli'>
                      Twitter
                      </li>
                      

                  </ul>
              </div>
              

            </div>
        </footer>






    </>
        ;
}
