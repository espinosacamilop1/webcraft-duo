import styles from './page.module.scss'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.logoSection}>
        <Image 
          src="/webcraft-duo-log.svg"
          width={654}
          height={300}
          alt='Webcraft Duo Logo'
        />
      </section>

      <Image src="/top-head.svg" width={544} height={544} className={styles.topHead}/>

      <section className={styles.whoAreWe}>
        <Image src="/our-team-image.svg" width={332} height={332} />

        <div>
          <h2>Who we are</h2>

          <p>
            Welcome to WebCraft Duo - Your Partner in Web Design for Business Success!
            <br></br>
            At WebCraft Duo, we create custom websites that showcase the unique essence of 
            your business. Our team of designers and developers is committed to providing 
            you with a visually stunning and highly functional online presence.
          </p>
        </div>
      </section>    

      <section className={styles.whyUs}>
        <h2>Why Us?</h2>
        <div>
        <Image src="/why-us.svg" width={307} height={307} />

          <span>
            <p><b>Unique Design: </b>We create custom websites that reflect the identity and values of your company.</p>
            <p><b>Advanced Technology: </b>We utilize the latest technologies for an optimized website that is future-ready, ensuring a seamless experience on all devices.</p>
            <p><b>Support: </b>We are here to provide assistance if needed.</p>

          </span>
        </div>
      </section>

      <section className={styles.trustUs}>
        <h2>Trust us to build an online presence that captivates, converts, and endures. Let's build together the success of your business on the web!</h2>
        <div>
          <span>
            <Image src="/red.png" width={220} height={231} />
          </span>
          <span>
            <Image src="/yellow.png" width={210} height={221} />
          </span>
          <span>
            <Image src="/blue.svg" width={289} height={289} />
          </span>
        </div>
      </section>

      <section className={styles.aboutUs}>
        <h2>"About Us"</h2>
        <div>
            At WebCraft Duo, we have an experienced team with over 5 years in website creation. Our talented programmer specializes 
            in efficient coding and development, while our lead designer brings creativity and a unique vision. We work collaboratively, 
            merging technical and creative skills to exceed our clients' expectations. We stand out for our philosophy of constant 
            innovation and commitment to excellence. Trust us to take your online presence to the next level!
            <br></br>
            <br></br>
            Thank you for considering WebCraft Duo for your next project. We are excited about the opportunity to work with you and 
            turn your ideas into digital reality. Contact us and discover how we can elevate your online presence to the next level!</div>
      </section>

      <section className={styles.contactUs}>
      </section>
    </main>
  )
}
