import React from 'react';

import { Container, Content, List, ListItem, Header, Button, Icon} from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';


export default class App extends React.Component {
  state = {
    index: 0,
    imageWidth: null
  }

  nextImage(event) {
        const { index, imageWidth } = this.state,
              X = event.nativeEvent.locationX,
              delta = (X < imageWidth/2) ? -1 : +1;

        let newIndex = (index + delta) % Images.length;

        if (newIndex < 0) {
            newIndex = Images.length - Math.abs(newIndex);
        }

        this.setState({
            index: newIndex
        });
    }

    onImageLayout(event) {
        this.setState({
            imageWidth: event.nativeEvent.layout.width
        });
    }

  render() {
    const image = Images[this.state.index];

    return (
      <View style={styles.container}>
      <Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'WGSS Memes', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
      />
                <View style={styles.empty} />
                <TouchableHighlight onPress={this.nextImage.bind(this)} style={styles.image}>
                    <Image source={{uri: image.uri}}
                           style={styles.image}
                           onLayout={this.onImageLayout.bind(this)}>
                    </Image>
                </TouchableHighlight>
                <Text style={styles.imageLabel}>{image.label}</Text>
                <View style={styles.empty} />
            </View>
    );
  }
}

const Images = [
  {
      uri: "https://lh3.googleusercontent.com/tEcl6YXSzHEaZgz3i3PHXhxHiT8lvT4A2F6uTXxLI4BqsLoXsnevdlDFHcXo3Wq84dlloCHr8yMeZMfrnroXyvPTzBD7SxaAWltvODXhatmUYy5dQ0eT78OkNiB0GENRi-VW4sLPnjI6fhiHwXx6JBGEO01iGbzUGEcfJ88LcAYFp-Qa57zDEyqGNw5uJ1cYk9HHyP0Cij7nJsIBCK2sTF8ZsAGGpgdzAPPXupx_vjbOgDrokD5GWSBeiKoW8YQ0pTAGrqwZ_ZFObRn4GZ0B8oPiZV3GKsLMf6XNauSrytLRNYk0V7xWSy-ECU1UUowQFmSC9HeqMiQ_yHo0bxZ2DlBP9nBqwqKjug2it1kKZ6jSlTzVfHkOb_6kqR3vb9H3rjkfwbAuSI242N6rdsUN0wEOl2353Tj6Sj6n_bDyT9-WXlr0xty0wD-BqMoSnoeN7or2NvTKqFSiEZIwt0lSlp5OI-GA_LyO1HEyID1dTisqboOlAvDqSr4JJZoz-Hguy2Ki_K-zHVPU_1UISZEdxHTsCC3brP0lHzfyVZnhLaWZTCW2mzrYy39V4EPvw51UQV0HcHEfblO8ZqX8gFZoO9StQfhdpiSgSuenAYgiql-Cvf7CHplWq_Jmt72ibUPJVcw2vODvCyrLu7AY7dHSz3yj2al2WyFvm8EyDdezDzAfZpfEMv9ndNz20SKWM_2Ldyl7uZRuxis9nXJdmFc=w538-h955-no",
      label: "Brandon dabbing on the haters"
  },

  {
      uri: "https://lh3.googleusercontent.com/Xx1xwGi6HSngitZI3iygM5zlPzcOYRpnlW3gf3Ew_7xwBafTJEYCdqUjigvEAaXmhc9yZZUvl9XoJZmeHTcBmrAk08yT228Ot03H7hRVmKweaDT1voQymTxPcMQdzRdUQnbn1dbZk85-Hzt9M633ojS5Hpt8Vqct1emiWpYoS4hYvtqgehS-n6D62R2T44QdRPeHDe_mGV_Ji2Lpfbz8TiySVUa7UjGSmZuSbFbLq9ZOa6lfTuF6Q8XC000hl0zkMrCkonVq_kkYtOp3lJ-NkXyxkTR9guiMRHurYg8IRAlr18jokutlTtrv5jY9oVhezPpQPe7LE1ePNhP2DgSy-luzp2IZSWuNHjg9-Js1Ouk7uek6Gcd9969PaMPVr1Wy-sdE_ahwneKI_J0HYH4y7Nng_e4l9Dai1CT0CsZJLvHEcAbNyEAwcoXkIhLPWYWJlgbXNGLwF2O5YL789N3Stdmwb72ifyqsDjr9JekdQQ2jOVljfjQmO6PAyWqMou5JSP0b2zmKklX67y5LVB2SwAMLT-Fl6BohJfi4kbFk4EqxsUUyLIq4SDfS4W_5P1SE_o-buXtE9BX_9FQA8VxWqnCGpiu4T2aO08Zs8j3XkeK29fyq31U9vaVA5KYRGwWE8vrMIl_S1fxWsz3l84L5M01opKKlOW2P3AKGNfCIc60xI404owqQU29L8FHA58FE-0RZJzDSDAwyE_raArs=w823-h789-no",
      label: "Another Brandon Meme"
  },

  {
      uri: "https://lh3.googleusercontent.com/FcNAKzbrbQHej1_dKfQ4QLw4v4Qw3iiiFiN55xxD6m10KFCHZnXkMAapTbVn7r_xWk-X9ktbwevic-43vLp7latCpziQSl7ShbQyg0rQ0D8EPHwB9AWtm4ZWGaLiPkQBcJ0mNTGLKTG1RGjngYC8FCkTCflLPpyV_S_K919SloCkRive6BFW7moUgs0lXxRZgzU3EVmoOToBK89X3JWjPE9nHzfMCE2IZHmx2gXzcPK_KYeGssvFBdGA088dWcg5un4E-Q_Gv1HYDy46iByBYGx0qamAvqW3JWDsPivxqOdqRNDPOhDi1sfgtZ3dbj0Lks1n9vn1SxTpnedZmLE5TDhGiOf1Fzx1X91eu3cdOR1GMU8AudMfBZXgB8hQ0v3M80xci8f90DI-1AgLuYJp3dGf_0hqUkCVi_4vxRBl-8y5aP4j5I0eA7tIyr6CnKW_eCvXPpjCfYx21g2a2RdkySe_K8RKlWjl1pyOP0Fjo3FilwsMasFC3Z9LxERboBcGdAwsQaFxGEZ1YR_kJr4dtiisqQd0LcF_t9ow54i5xbFjyuTSlg2XWkqgAmbnzKsk85Cf8Cf42_OwYTUKnRkHVz1gxji2_uX5mXtdEX1LB63XuTnGK1VxqsQ3pY069V9UoMj7a78Hsgwzr6x2lOt9TLfi=s789-no",
      label: "Run RUN RUN"
  },

  {
      uri: "https://lh3.googleusercontent.com/ul1vKNjUNKzr9c0FH4cIpcE_Euqkye4KvS7-k0hXnaCzlcMvruw_VpxRXv97q9ik9rbuoA0g3U_eTORUWwbAyi06y72ewbfrWb73S9rrmqDsfGpW2JvAezUhdM9e3xOPfPs6PsDGf9RMNF0L8bIkmm7cP8ss4JsG85d9SaMg-V0qCscSfDlF8rdXAjSn7osxz77RmtatBoDrWXUtmS-mU4xs3ypISoNER6x1Va7FPy5QUl4lNh-D34zRGM8Oe5s-zH9PdyOj9MM62Fs-aCMoXoUxEKXc0o4IhxagxhpNhFmOc-VT2Yb5oNebGvRayZQjQdKCBfjpAfPdKp6UZJCXwfDe9QdJRfHOVDgvfaIDJ41Y48Wv9iAuwu3pFRrKMNkrYfGGhnLNlmJcR8pSR8VwV0q6t3jUkUokp7bjjzezxhoPT6MhJWwny0a4uuPraUxJT8cothov4XhuuioI6BvgQ61oyLiXSm1HkaYTX0VPGsSyfyTO3Oftj8vNgWVc1cdT5NI4EDz2-Zx9HyQ5ZoWavxK3QNVMEeAv6Fr9bw-qRxpN0er3YQfazaFTXrlruJtBrqaQEUYyNqbAwYho1EZe8IFeVydEduTXXR4Dq7UiPsY6nOPGsieTn14sMLiUMnXgGxx2lN74jD9ZCL5ucaLOJEpZ=w444-h789-no",
      label: "He's coming..."
  },

  {
      uri: "https://lh3.googleusercontent.com/1fTpfwOVXVji79eaRMWPVOMJuYoTiuWn23FGCnKH34wVFYIqflvizz3r0JqIGCLNOMO0ZniMsrcnYTkJUyZPLICyVO3dHQPSYhX838vw2X3c84sNTEdZunq2fPttDjKDuellUHedM56BcryyigN6b1B01PSXj4m4JsyaKe_VXsgkLo-GEQNFtzB2XHnTzusERA8RyCsRPaQCzB5ZMbIaCGjvdtldS0g9Qco_fePZ3J7AhExk4rruUlfJzQttU01eTB1vr5BLKHoEyzYuP3NOrHB4dKyHFhYRUGPG3IFFdkKZsXegoO_oNJ1gHMBqO3W02gPiOxMofxAeA8oUCbsNbjaf773elvDrgbTzwTajbLgKjbkq0qapMEC7q1WH8vfr57F4mVfPEG1PYoDOmIXe79vwJyqO1-bMcuD2xqm2q1PAy2kAxP38ZSoS6R186Yz6Cp0q9h6ABgO1qbQ3iWF8zuE1cIw-sE5NCLWl8OBJ5Q1qggb_ZKtV4uEQ9C6q39vYL-rrt2qMMJ5fML30HGU1KdMG8c08bX4XObAlvAJ2btmRmrFH7TbzHBxiYRkG3IvJsciTLnxbAkKTWqHA3JjbFBQzN2wUInvKuLLjVnOQHgd0nflUxkjhz-RWO6K_lp6z2ZxFcC4aFGU3Oi-wKhryOhThkA=w444-h789-no",
      label: "Brandonnnn"
  },

  {
      uri: "https://lh3.googleusercontent.com/RQRuZhtlUSlTrf8iOHaj0GNkdxKiO5nqOgUnfI8Fnuct0cw2FvaSXKjvVdQ7jSHVaIEEyk5sO75hkIFmOBGiH476x0AHbPkVaNPrPYfWU787IWp5Q9-qare9BuUl4FfuQHjCWGrFzbdVLjkzmisqPB1JOtrQJk0TtQr1__pZksGcALnOizadiBf5fApo205nHA1WmBSVBCtSSQKK9-K-iqMqCEmUtqx4SyMHid1Du6m-kwCvWnHJUHDIbKB7pBQwaPyZH__Pgy9UlCoRwf-bI75uJEoCZTEHU09eTGafAgrw9uDy_VWknJ5oaUZVacz-neSCn_zBGLbf6nBPXdgFS-OS59oEYeU4I0frB9qFzLlYDK5Py8RBtG57q8CZasWtHrKVJqqyYZ3mz3jvmnBAJgV4mE1wXGdnBfVSeqAwhoV7nOIvqanVnK3UT0SYNUvwIGjaTR3TllK4g2QCP1iA30la0c1wpsfpmNOTgJQVoC2zOyBJ_b6Gv04wtICL6AMTa8vTv4w5n49_-U3x3C_F-UCL3kEbrEbGGy0B12NsT3l7sTi4VZFwmJS945GV1tHi0Ehg301oWpTFPJG-mEAtGkDem0jMUU6-8WemzET2w2xC4odaLSsRVaCxECDE__KtPWCzRp5CAd6S6_E5MqMs99AtYg=w592-h789-no",
      label: "Too late..."
  }
];

const styles = StyleSheet.create({
  container: {
      flex: 1,

      backgroundColor: '#abcdef',
  },
  image: {
      flex: 2,
      width: "100%",
      justifyContent: 'flex-end',
      alignItems: 'center'
  },
  imageLabel: {
      textAlign: 'center',
      backgroundColor: 'rgba(100, 100, 100, 0.5)',
      color: 'white',
      width: "100%"
  },
  empty: {
      flex: 1
  }
});
