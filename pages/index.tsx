import type { NextPage } from 'next';
import Head from 'next/head';
import {
    PageStructure,
    ImageWrapped,
    SearchIconSVG,
    Article,
    Box,
    Hamburger,
    Sidebar,
    Navigation,
    Title,
    SubscribeForm,
    FooterList,
    FooterListItem,
} from 'components';
import { motion } from 'framer-motion';
import daigo from 'public/daigo_white.svg';
import Image from 'next/image';
import Link from 'next/link';
import { navigationArray } from 'utils/pageArrays';
import { hoverVariant } from 'Variants/variants';
import bgPawel from 'public/bgPawel.jpg';
import frontTop from 'public/frontTop.jpeg';
import { about, features, memeberShip, social } from 'utils/pageArrays';

// import { createClient } from 'next-sanity';

// const client = createClient({
//     projectId: '3zonnd0w',
//     dataset: 'production',
//     apiVersion: '2022-08-28',
//     useCdn: false,
// });

const Home: NextPage = () => {
    return (
        <div className="bg-navBg ">
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar />
            <PageStructure htmlTag="nav" className="px-5 bg-navBg">
                <Navigation />
            </PageStructure>
            <PageStructure htmlTag="main" className="bg-navBg ">
                <Box className="grid gap-y-3 bg-bgImg overflow-hidden px-5 pt-10 pb-40">
                    {/* <Image src={bgPawel} layout="fill" objectFit="cover" objectPosition="top" /> */}
                    <Title title="Thoughts, stories and ideas" />
                    <Article
                        aspect="square"
                        description="Being unique is better than being perfect"
                        className="artilceItemMain"
                        href="#"
                        src={frontTop}
                        alt="front_image"
                    />
                    <Box className="grid grid-cols-3 gap-3">
                        <Article
                            aspect="square"
                            className="relative text-pageWhite leading-none cursor-pointer text-size20"
                            withoutDescription
                            description="Being unique is better than being perfect"
                            href="#"
                            src={frontTop}
                            alt="front_image"
                        />
                        <Article
                            aspect="square"
                            className="relative text-pageWhite leading-none cursor-pointer text-size20"
                            withoutDescription
                            description="Being unique is better than being perfect"
                            href="#"
                            src={frontTop}
                            alt="front_image"
                        />
                        <Article
                            aspect="square"
                            className="relative text-pageWhite leading-none cursor-pointer text-size20"
                            withoutDescription
                            description="Being unique is better than being perfect"
                            href="#"
                            src={frontTop}
                            alt="front_image"
                        />
                        <Article
                            aspect="square"
                            className="relative text-pageWhite leading-none cursor-pointer text-size20"
                            withoutDescription
                            description="Being unique is better than being perfect"
                            href="#"
                            src={frontTop}
                            alt="front_image"
                        />
                        <Article
                            aspect="square"
                            className="relative text-pageWhite leading-none cursor-pointer text-size20"
                            withoutDescription
                            description="Being unique is better than being perfect"
                            href="#"
                            src={frontTop}
                            alt="front_image"
                        />
                        <Article
                            aspect="square"
                            className="relative text-pageWhite leading-none cursor-pointer text-size20"
                            withoutDescription
                            description="Being unique is better than being perfect"
                            href="#"
                            src={frontTop}
                            alt="front_image"
                        />
                    </Box>
                </Box>
                <Box className="-translate-y-20 px-5">
                    <p className="text-pageWhite col-span-2 relative border-t-default border- text-size20">
                        SEE WHAT WE&apos;VE WRITTEN LATELY
                    </p>

                    <Box className="w-full grid grid-cols-2 gap-3 mt-5">
                        <Article
                            aspect="square"
                            className="relative text-pageWhite leading-none cursor-pointer text-size20"
                            withoutDescription
                            description="Being unique is better than being perfect"
                            href="#"
                            src={frontTop}
                            alt="front_image"
                        />
                        <Article
                            aspect="square"
                            className="relative text-pageWhite leading-none cursor-pointer text-size20"
                            withoutDescription
                            description="Being unique is better than being perfect"
                            href="#"
                            src={frontTop}
                            alt="front_image"
                        />
                        <Article
                            aspect="square"
                            className="relative text-pageWhite leading-none cursor-pointer text-size20"
                            withoutDescription
                            description="Being unique is better than being perfect"
                            href="#"
                            src={frontTop}
                            alt="front_image"
                        />
                        <Article
                            aspect="square"
                            className="relative text-pageWhite leading-none cursor-pointer text-size20"
                            withoutDescription
                            description="Being unique is better than being perfect"
                            href="#"
                            src={frontTop}
                            alt="front_image"
                        />
                        <Article
                            aspect="square"
                            className="relative text-pageWhite leading-none cursor-pointer text-size20"
                            withoutDescription
                            description="Being unique is better than being perfect"
                            href="#"
                            src={frontTop}
                            alt="front_image"
                        />
                        <Article
                            aspect="square"
                            className="relative text-pageWhite leading-none cursor-pointer text-size20"
                            withoutDescription
                            description="Being unique is better than being perfect"
                            href="#"
                            src={frontTop}
                            alt="front_image"
                        />
                    </Box>
                </Box>
                {/* <Box className="relative -top-16 px-5"></Box> */}
                <Box className="-translate-y-10 px-5">
                    <Box className="bg-bgImg bg-left-bottom grid grid-cols-2 gap-3 px-2 py-4">
                        <p className="text-pageWhite col-span-2 relative border-t-default border-pageWhite text-size18">
                            SEE WHAT WE&apos;VE WRITTEN LATELY
                        </p>
                        <Article
                            aspect="story"
                            className="relative text-pageWhite leading-none cursor-pointer text-size20"
                            withoutDescription
                            description="Being unique is better than being perfect"
                            href="#"
                            src={frontTop}
                            alt="front_image"
                        />
                        <Article
                            aspect="square"
                            className="relative text-pageWhite leading-none cursor-pointer text-size20"
                            withoutDescription
                            description="Being unique is better than being perfect"
                            href="#"
                            src={frontTop}
                            alt="front_image"
                        />
                    </Box>
                </Box>
            </PageStructure>
            <PageStructure htmlTag="footer" className="bg-navBg px-5 -translate-y-10">
                <ImageWrapped
                    className="w-[150px] h-[100px]"
                    imageComp={<Image src={daigo} layout="fill" objectFit="contain" />}
                />
                <SubscribeForm />
                <Box className="grid grid-cols-2 gap-4 mt-5">
                    <FooterList className="text-pageWhite text-size24 md:text-size32" title="Social">
                        <ul className="grid gap-y-3">
                            {social.map(el => (
                                <li key={el.link} className="flex gap-2 items-center text-base hover:underline">
                                    <ImageWrapped
                                        className="relative flex items-center"
                                        imageComp={<Image src={el.img} />}
                                    />

                                    <Link href={`/${el.link}`}>{el.link}</Link>
                                </li>
                            ))}
                        </ul>
                    </FooterList>
                    <FooterList className="text-pageWhite text-size24 md:text-size32" title="About">
                        <FooterListItem className="text-pageWhite text-base grid gap-y-3" listArray={about} />
                    </FooterList>
                    <FooterList className="text-pageWhite text-size24 md:text-size32" title="Features">
                        <FooterListItem className="text-pageWhite text-base grid gap-y-3" listArray={features} />
                    </FooterList>
                    <FooterList className="text-pageWhite text-size24 md:text-size32" title="Membership">
                        <FooterListItem className="text-pageWhite text-base grid gap-y-3" listArray={memeberShip} />
                    </FooterList>
                </Box>
            </PageStructure>
        </div>
    );
};

export default Home;

// export async function getStaticProps() {
//     const article = await client.fetch(`*[_type == "article"]`);
//     console.log(article, 'data');
//     return {
//         props: { article },
//     };
// }
