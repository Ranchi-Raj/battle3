import React from 'react'
import Sidebar from './Sidebar';
import Navbar from './navbar';
import './Home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Post from './Post';
import Post1 from './Post1';

export default function Home() {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }

      const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    const data = [
        {
          company: "Company A",
          imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaKdcpVNL9e0ZpnBTtbSgQ_NNLg80dFL1hroTrwIXyeA&s",
        },
        {
          company: "Company B",
          imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5dEB__jJy43cEaONIPHwd3VC728s-TFxpaREnzUbBQ&s",
        },
        {
          company: "Company C",
          imageLink: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.jpg",
        },
        {
          company: "Company D",
          imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaKdcpVNL9e0ZpnBTtbSgQ_NNLg80dFL1hroTrwIXyeA&s",
        },
        {
          company: "Company E",
          imageLink: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.jpg",
        },
        {
          company: "Company F",
          imageLink: "https://picsum.photos/200/300?random=6",
        },
        {
          company: "Company G",
          imageLink: "https://picsum.photos/200/300?random=7",
        },
        {
          company: "Company H",
          imageLink: "https://picsum.photos/200/300?random=8",
        },
        {
          company: "Company I",
          imageLink: "https://picsum.photos/200/300?random=9",
        },
        {
          company: "Company J",
          imageLink: "https://picsum.photos/200/300?random=10",
        },
        {
          company: "Company K",
          imageLink: "https://picsum.photos/200/300?random=11",
        },
        {
          company: "Company L",
          imageLink: "https://picsum.photos/200/300?random=12",
        },
        {
          company: "Company M",
          imageLink: "https://picsum.photos/200/300?random=13",
        },
        {
          company: "Company N",
          imageLink: "https://picsum.photos/200/300?random=14",
        },
        {
          company: "Company O",
          imageLink: "https://picsum.photos/200/300?random=15",
        },
        {
          company: "Company P",
          imageLink: "https://picsum.photos/200/300?random=16",
        },
        {
          company: "Company Q",
          imageLink: "https://picsum.photos/200/300?random=17",
        },
        {
          company: "Company R",
          imageLink: "https://picsum.photos/200/300?random=18",
        },
        {
          company: "Company S",
          imageLink: "https://picsum.photos/200/300?random=19",
        },
        {
          company: "Company T",
          imageLink: "https://picsum.photos/200/300?random=20",
        }
      ];
      
  return (
    <div>
       <div className='fixed w-full z-50'>
      <Navbar/>
      </div>
      <div className='fix'>
        <Sidebar/>
      </div>
      <div className=' relative fix2 hidden xl:block z-10'>
        <div>
        <Slider {...settings}>
        {
            data.map((i) => 
            <div>
                <img className='w-96 h-72 m-auto' src={i.imageLink} alt="" />
            </div>
            )
        }
        </Slider>
        </div>
        <div className='font-semibold text-2xl mt-6'><span className='text-violet-500 '> Posts </span>You May Like</div>
        <div className='flex my-4'>
            <Post 
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaKdcpVNL9e0ZpnBTtbSgQ_NNLg80dFL1hroTrwIXyeA&s'

                name="Company A"
                tag="Tesla, Inc."
            />
            <Post
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5dEB__jJy43cEaONIPHwd3VC728s-TFxpaREnzUbBQ&s'
                name="Company B"
                tag="Apple, Inc."
            />

<Post 
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaKdcpVNL9e0ZpnBTtbSgQ_NNLg80dFL1hroTrwIXyeA&s'

                name="Company A"
                tag="Tesla, Inc."
            />
            <Post
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5dEB__jJy43cEaONIPHwd3VC728s-TFxpaREnzUbBQ&s'
                name="Company B"
                tag="Apple, Inc."
            />
        </div>
      </div>
      <div className=' xl:hidden fix3 z-10'>
        <div>
        <Slider {...settings}>
        {
            data.map((i) => 
            <div>
                <img className='w-96 h-48 m-auto' src={i.imageLink} alt="" />
            </div>
            )
        }
        </Slider>
        </div>
        <div className='font-semibold text-lg mt-6'><span className='text-violet-500 '> Posts </span>You May Like</div>
        <div className='flex flex-col my-4 overflow-x-auto text-sm'>
            <Post1
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaKdcpVNL9e0ZpnBTtbSgQ_NNLg80dFL1hroTrwIXyeA&s'
                name="Company A"
                tag="Tesla, Inc."
            />
            <Post1
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5dEB__jJy43cEaONIPHwd3VC728s-TFxpaREnzUbBQ&s'
                name="Company B"
                tag="Apple, Inc."
            />

            <Post1
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaKdcpVNL9e0ZpnBTtbSgQ_NNLg80dFL1hroTrwIXyeA&s'

                name="Company A"
                tag="Tesla, Inc."
            />
            <Post1
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5dEB__jJy43cEaONIPHwd3VC728s-TFxpaREnzUbBQ&s'
                name="Company B"
                tag="Apple, Inc."
            />
        </div>
      </div>
    </div>
  )
}
