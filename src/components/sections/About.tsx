import { FunctionComponent } from "react";
import styles from "../../styles/About.module.css";
import ImageButton from "../AboutButton";
import AlbumCard from "../AlbumCard";


const About: FunctionComponent = () => {
  return (
    <section className={styles.section} id="about">
      <div className={styles.rectangle}>
        <h2 className={styles.header}>about</h2>
      <div className={styles.content}>
        <ImageButton
          href="tel:+19494131169"
          defaultSrc="assets/phoneDefault.png"
          hoverSrc="assets/phoneHovered.png"
          alt="Resume Button"
        />        
        <p> +1(949)-413-1169</p>
        <ImageButton
          href="https://github.com/marawilliams"
          defaultSrc="assets/githubDefault.png"
          hoverSrc="assets/githubHovered.png"
          alt="Resume Button"
        />
        <ImageButton
          href="mailto:mara.williams005@gmail.com"
          defaultSrc="assets/gmailDefault.png"
          hoverSrc="assets/gmailHovered.png"
          alt="Resume Button"
        />
        <ImageButton
          href="https://open.spotify.com/user/mara0427?si=3c46f1d5aa3047ed"
          defaultSrc="assets/spotifyDefault.png"
          hoverSrc="assets/spotifyHovered.png"
          alt="Resume Button"
        />
        <ImageButton
          href="https://www.linkedin.com/in/mara-williams-958a69274/"
          defaultSrc="assets/linkedInDefault.png"
          hoverSrc="assets/linkedInHovered.png"
          alt="Resume Button"
        />
      </div>
      <div className ={styles.imageContainer}>
        <img 
          src="assets/aboutImage.png"
          alt="About Me"
        />
      </div>
      <div className = {styles.albumHeader}>
        <p>albums I think are perfect</p>
      </div>
      <div className={styles.albumGrid}>
        {albums.map((album, index) => (
          <AlbumCard
            key={index}
            imageSrc={album.imageSrc}
            spotifyUrl={album.spotifyUrl}
            alt={album.alt}
          />
        ))}
      </div>
      </div>

    </section>
    
  );
};

export default About;



const albums = [
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b2736f2f499c1df1f210c9b34b32",
    spotifyUrl: "https://open.spotify.com/album/3ycjBixZf7S3WpC5WZhhUK?si=Wo8GCOYHRy6X-EPzv_psOQ",
    alt: "Album 1",
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273633d4bb47d2bd9d993adeb2f",
    spotifyUrl: "https://open.spotify.com/album/5ZetO1qY0okdczkZzAQEBL?si=yTtzZqB_QNaLVPTs47btDw",
    alt: "Album 2",
  },
  {
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ16SNvvttcs99hISA1JfZwsm_7JzAF_nvtEg&s",
    spotifyUrl: "https://open.spotify.com/album/5vkqYmiPBYLaalcmjujWxK?si=mbPc6SxcShuMaOjElEPZBw",
    alt: "Album 3"
  },
  {
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCyJg5xp3JJR81zhZ_PEanRoV0dzGPG1KD-A&s",
    spotifyUrl: "https://open.spotify.com/album/7rqgm1BnAZ8I4d6hukpkdg?si=5O6aL4YsTmypqkPR5uPl3A",
    alt: "Album 3"
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b2735a2ff617de4e51a9a214b56a",
    spotifyUrl: "https://open.spotify.com/album/4HTy9WFTYooRjE9giTmzAF?si=oU8yjbZjRe2XCftJaD-xsw",
    alt: "Album 3"
  },
  {
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDsjMLQdpa35pZPVHe3r2HUn8DNRumhvustw&s",
    spotifyUrl: "https://open.spotify.com/album/7owO1ECjA53Isw9LiIcXKZ?si=rMGUfOaYSLydD9iWQAVUfA",
    alt: "Album 3"
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273828e52cfb7bf22869349799e",
    spotifyUrl: "https://open.spotify.com/album/0bCAjiUamIFqKJsekOYuRw?si=niiU_-V1R8aCzL1Gyl8Juw",
    alt: "Album 3"
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273345536847e60f622ee0eae96",
    spotifyUrl: "https://open.spotify.com/album/1xpGyKyV26uPstk1Elgp9Q?si=HQJ43jDoQ1alyrWM_vOVxA",
    alt: "Album 3"
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b27371d62ea7ea8a5be92d3c1f62",
    spotifyUrl: "https://open.spotify.com/album/7aJuG4TFXa2hmE4z1yxc3n?si=NCPZwpw6SOyHBv9jHcFwCA",
    alt: "Album 3"
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b2738386795a636d72e74c958590",
    spotifyUrl: "https://open.spotify.com/album/3TSMSh5dai7WEnEGOoMXBZ?si=0bPa54UWREiVZItGJGmyBw",
    alt: "Album 3"
  }
  ,
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273e175a19e530c898d167d39bf",
    spotifyUrl: "https://open.spotify.com/album/2guirTSEqLizK7j9i1MTTZ?si=6poAuGlQRECjnuNWK1vT0Q",
    alt: "Album 3"
  }
  ,
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273803f7ef91b81189ce045707d",
    spotifyUrl: "https://open.spotify.com/album/6ctghBlqfCckLPzhRqrdTS?si=q0HuccxWRl-HS02PihHhrg",
    alt: "Album 3"
  }
  ,
  {
    imageSrc: "https://i.scdn.co/image/ab67616d00001e021816adce1d49e35d3ce9a1d1",
    spotifyUrl: "https://open.spotify.com/album/7iz9Kop1m3RScQnkcaB7y6?si=tbhtTTgNQgSgyPNOMGiAbw",
    alt: "Album 3"
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273560614faf0d641e7364ece3f",
    spotifyUrl: "https://open.spotify.com/album/07ZwJWFc3I8MmeQ8rsg0x6?si=x4xjsrERSLWEmAHo8Cbuiw",
    alt: "Album 3"
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273cd25ce73e3eddeedb995fcee",
    spotifyUrl: "https://open.spotify.com/album/1Ugdi2OTxKopVVqsprp5pb?si=-gwBfvvhRnaFKGvezvPWjg",
    alt: "Album 3"
  },
  {
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShEjdLwV1SfSPZICpkKlNsrsr2UfNuM7WNFA&s",
    spotifyUrl: "https://open.spotify.com/album/2Gb2plO2TkNRIgoCuJGm7C?si=9AOhkrISQ2CRJCltWD-bAg",
    alt: "Album 3"
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d00001e02f396ea414b735ef23e2ed1a9",
    spotifyUrl: "https://open.spotify.com/album/6Tw7FjaZDQgHAbckmIrh8a?si=HCGbHbw6RgegQX4oyB3Ltg",
    alt: "Album 3"
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b27390a50cfe99a4c19ff3cbfbdb",
    spotifyUrl: "https://open.spotify.com/album/6P5QHz4XtxOmS5EuiGIPut?si=1IqhRxDfSkmXuSfctROXww",
    alt: "Album 3"
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273413a6c2c7b296d98171e5e21",
    spotifyUrl: "https://open.spotify.com/album/4jKeipwuUTjlx9USNYdhZn?si=D405TxAVQbCRmshHeWT4AQ",
    alt: "Album 3"
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b2730d1dca630d024f3e0c1d7407",
    spotifyUrl: "https://open.spotify.com/album/2wECjlNjLlYQk7n0oZHlWL?si=zlAp1AVEQoiDsvAh6Uj5eQ",
    alt: "Album 3"
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273a6e07487251d331f8a68b553",
    spotifyUrl: "https://open.spotify.com/album/2vi1ddPi3fY7vePMqxUVob?si=Yiy_ITRITfujSlLElDssDQ",
    alt: "Album 3"
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b2733c577cb3b210d1a019c26442",
    spotifyUrl: "https://open.spotify.com/album/2Eu5h7H0yoFDNWud9QftS4?si=of5aX7MxT4eXCqTMiyjfkw",
    alt: "Album 3"
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273553697592a70a6a963ab9fa3",
    spotifyUrl: "https://open.spotify.com/album/4cZhiGqIqqqlHxWOC9r7Jp?si=lB9Kx7GwSUO1NC9MeyJpFg",
    alt: "Album 3"
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b2738c6e0129749adeb3203c1243",
    spotifyUrl: "https://open.spotify.com/album/36zGKA55rGfgPUHxZpCQLW?si=K0XtmwcRTbikrmLs39T6Ow",
    alt: "Album 3"
  }
];