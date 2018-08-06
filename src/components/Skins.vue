<template>
  <div>
    <v-tabs
      color="blue lighten-1"
      dark
      slider-color="yellow"
      fixed-tabs
    >
      <v-tab ripple href="#tab-1">
        Single
      </v-tab>
      <v-tab ripple href="#tab-2">
        Complete Pack
      </v-tab>
      <v-tab-item id="tab-1" class="mt-5">
        <v-layout wrap justify-center>
          <v-flex pa-4 text-xs-center>
            <h2 class="mb-4">Random Skin</h2>
            <v-layout justify-center>
              <v-flex class="flex-cards">
                <v-card class="transition cards">
                  <v-card-media
                    class="white--text"
                    height="400px"
                    :src="image"
                    @click="generate(0)"
                  >
                    <v-layout fill-height align-end class="carding transition" pa-1>
                      <v-flex xs12 flexbox pa-2 class="bg-card">
                        <div class="headline">{{name}}</div>
                        <span class="grey--text text--lighten-1">Outfit</span>
                      </v-flex>
                    </v-layout>
                  </v-card-media>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex pa-4 text-xs-center>
            <h2 class="mb-4">Random Pickaxe</h2>
            <v-layout justify-center>
              <v-flex col xs12 class="flex-cards">
                <v-card class="transition cards">
                  <v-card-media
                    class="white--text"
                    height="400px"
                    src="https://files.tofugu.com/articles/japanese/2016-03-21-japanese-punctuation/question-mark.jpg"
                  >
                    <v-layout fill-height align-end class="carding transition" pa-1>
                      <v-flex xs12 flexbox pa-2 class="bg-card">
                        <div class="headline">???????</div>
                        <span class="grey--text text--lighten-1">Harvesting Tool</span>
                      </v-flex>
                    </v-layout>
                  </v-card-media>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex pa-4 text-xs-center>
            <h2 class="mb-4">Random Glinder</h2>
            <v-layout justify-center>
              <v-flex col xs12 class="flex-cards">
                <v-card class="transition cards">
                  <v-card-media
                    class="white--text"
                    height="400px"
                    src="https://files.tofugu.com/articles/japanese/2016-03-21-japanese-punctuation/question-mark.jpg"
                  >
                    <v-layout fill-height align-end class="carding transition" pa-1>
                      <v-flex xs12 flexbox pa-2 class="bg-card">
                        <div class="headline">???????</div>
                        <span class="grey--text text--lighten-1">Glinder</span>
                      </v-flex>
                    </v-layout>
                  </v-card-media>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex pa-4 text-xs-center>
            <h2 class="mb-4">Random Backpack</h2>
            <v-layout justify-center>
              <v-flex col xs12 class="flex-cards">
                <v-card class="transition cards">
                  <v-card-media
                    class="white--text"
                    height="400px"
                    src="https://files.tofugu.com/articles/japanese/2016-03-21-japanese-punctuation/question-mark.jpg"
                  >
                    <v-layout fill-height align-end class="carding transition" pa-1>
                      <v-flex xs12 flexbox pa-2 class="bg-card">
                        <div class="headline">???????</div>
                        <span class="grey--text text--lighten-1">Backpack</span>
                      </v-flex>
                    </v-layout>
                  </v-card-media>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex pa-4 text-xs-center>
            <h2 class="mb-4">Random Dance</h2>
            <v-layout justify-center>
              <v-flex col xs12 class="flex-cards">
                <v-card class="transition cards">
                  <v-card-media
                    class="white--text"
                    height="400px"
                    src="https://files.tofugu.com/articles/japanese/2016-03-21-japanese-punctuation/question-mark.jpg"
                  >
                    <v-layout fill-height align-end class="carding transition" pa-1>
                      <v-flex xs12 flexbox pa-2 class="bg-card">
                        <div class="headline">???????</div>
                        <span class="grey--text text--lighten-1">Dance</span>
                      </v-flex>
                    </v-layout>
                  </v-card-media>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-tab-item>
      <v-tab-item id="tab-2" class="mt-5">
        <v-layout wrap justify-center>
          <v-flex pa-4 text-xs-center>
            <h2 class="mb-4">Random Pack</h2>
            <v-btn class="mb-4 yellow darken-1 black--text" large>Generate</v-btn>
            <v-layout wrap justify-center>
              <v-flex class="flex-cards">
                <v-card class="transition cards">
                  <v-card-media
                    class="white--text"
                    height="400px"
                    src="https://cdn.gamer-network.net/2018/usgamer/fortnite-wukong_bigger.jpg"
                  >
                    <v-layout fill-height align-end class="carding transition" pa-1>
                      <v-flex xs12 flexbox pa-2 class="bg-card">
                        <div class="headline">Funk ops</div>
                        <span class="grey--text text--lighten-1">Outfit</span>
                      </v-flex>
                    </v-layout>
                  </v-card-media>
                </v-card>
              </v-flex>
              <v-flex class="flex-cards">
                <v-card class="transition cards">
                  <v-card-media
                    class="white--text"
                    height="400px"
                    src="https://progameguides.com/wp-content/uploads/2018/01/fortnite-harvesting-tool-death-valley.jpg"
                  >
                    <v-layout fill-height align-end class="carding transition" pa-1>
                      <v-flex xs12 flexbox pa-2 class="bg-card">
                        <div class="headline">Funk ops</div>
                        <span class="grey--text text--lighten-1">Outfit</span>
                      </v-flex>
                    </v-layout>
                  </v-card-media>
                </v-card>
              </v-flex>
              <v-flex class="flex-cards">
                <v-card class="transition cards">
                  <v-card-media
                    class="white--text"
                    height="400px"
                    src="https://progameguides.com/wp-content/uploads/2018/03/fortnite-back-bling-pursuit.jpg"
                  >
                    <v-layout fill-height align-end class="carding transition" pa-1>
                      <v-flex xs12 flexbox pa-2 class="bg-card">
                        <div class="headline">Funk ops</div>
                        <span class="grey--text text--lighten-1">Outfit</span>
                      </v-flex>
                    </v-layout>
                  </v-card-media>
                </v-card>
              </v-flex>
              <v-flex class="flex-cards">
                <v-card class="transition cards">
                  <v-card-media
                    class="white--text"
                    height="400px"
                    src="https://progameguides.com/wp-content/uploads/2018/05/fortnite-glider-sugar-crash.jpg"
                  >
                    <v-layout fill-height align-end class="carding transition" pa-1>
                      <v-flex xs12 flexbox pa-2 class="bg-card">
                        <div class="headline">Funk ops</div>
                        <span class="grey--text text--lighten-1">Outfit</span>
                      </v-flex>
                    </v-layout>
                  </v-card-media>
                </v-card>
              </v-flex>
              <v-flex class="flex-cards">
                <v-card class="transition cards">
                  <v-card-media
                    class="white--text"
                    height="400px"
                    src="http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/v1/1136386/%D0%91%D0%B5%D0%B7%D1%8B%D0%BC%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9_mdacal.png"
                  >
                    <v-layout fill-height align-end class="carding transition" pa-1>
                      <v-flex xs12 flexbox pa-2 class="bg-card">
                        <div class="headline">Funk ops</div>
                        <span class="grey--text text--lighten-1">Outfit</span>
                      </v-flex>
                    </v-layout>
                  </v-card-media>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: 'Skins',
  data: () => ({
    images: [
      'http://www.eclypsia.com/content/Dossier%20R%C3%A9dacteurs/D4yLess/Fortnite/Skins/fortnite-outfit-burnout-400x418.jpg',
      'https://www.wallpapersrc.com/img/ab2cb8c2e27c43aa8303b600ffa06016/squad-leader-fortnite-season-4-battle-royale-1668x2224.jpg',
      'https://progameguides.com/wp-content/uploads/2017/12/fortnite-outfit-brilliant-striker.jpg',
      'http://www.eclypsia.com/content/Dossier%20R%C3%A9dacteurs/D4yLess/Fortnite/Skins/fortnite-outfit-raven-full-400x418.jpg',
      'https://ih1.redbubble.net/image.543990283.8174/flat,800x800,070,f.jpg',
      'https://pm1.narvii.com/6805/6725637f5d073e39dfe2983bcffc949b4881f4b2v2_hq.jpg',
      'https://pbs.twimg.com/media/DcEpNPIXcAAQ9tf.jpg',
      'https://www.breakflip.com/uploads/AAA/Epic%20Games/Fortnite/Skins/fortnite-outfit-merry-marauder-hd-400x418.jpg',
      'https://pm1.narvii.com/6807/01ab9b9fcb6d30f6dc4efaf5c102561841aa1cc6v2_hq.jpg'
    ],
    image: 'https://files.tofugu.com/articles/japanese/2016-03-21-japanese-punctuation/question-mark.jpg',
    name: '???????'
  }),
  created: function () {
    for (let i in this.images) {
      document.createElement('img').src = this.images[i]
    }
  },
  methods: {
    generate (i, time = 0, delais = 100) {
      let that = this
      that.image = that.images[i]
      if (time <= 2000) {
        if (time >= 1500) {
          delais = 300
        }
        setTimeout(function () {
          that.generate(Math.floor(Math.random() * Math.floor(that.images.length)), time, delais)
        }, delais)
        time += 100
      } else {
        that.name = 'Low BOB'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .headline {
    font-weight: bolder;
    text-transform: uppercase;
  }
  .bg-card {
    background-color: rgba(0,0,0,0.4);
  }
  .carding {
    cursor: pointer;
    box-shadow: rgba(255,255,255,0.4) 0 0 0 4px inset, rgba(0,0,0,0.5) 0 0 30px inset;
  }
  .carding:hover {
    box-shadow: rgba(255,255,0,1) 0 0 0 4px inset;
  }
  .flex-cards {
    min-width: 300px;
    max-width: 300px;
  }
  .cards {
    margin-right: 8px;
    margin-left: 8px;
    margin-bottom: 16px;
  }
  .cards:hover {
    box-shadow: rgba(255,255,0,1) 0 0 0 4px;
  }
  @media screen and (max-width: 600px){
    .cards {
      margin-right: 0;
      margin-left: 0;
    }
    .flex-cards:last-child .cards{
      margin-bottom: 0;
    }
  }

</style>
