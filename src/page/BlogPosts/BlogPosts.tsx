import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, FlatList, Pressable, Text } from "native-base";
import { Heading } from "native-base";
import { RootStackParamList } from "../../components/navigation/navigationParams";

type Props = NativeStackScreenProps<RootStackParamList, "Posts">;

export const BlogPosts = ({ navigation }: Props) => {
  const data = [
    {
      id: 1,
      title: "Citroën Xantia",
      description:
        "Az 1993-ban bemutatott Xantia még a valódi Citroënek közé tartozik, legalábbis ha azt tekintjük a valódiság mértékének, hogy még hidropneumatikus rugózást kapott. Többek között ennek köszönhető, hogy mindmáig csúcsverziója, az összesen 18 236 példányban készült Activa V6-os változata tartja a jávorszarvas teszt sebességrekordját 85 km/órával. Ugyanakkor formája sem volt átlagos, máig elegáns karosszériájának vonalait nem kisebb designer, mint Bertone vetette papírra. A legkívánatosabb Xantia természetesen az 1997-ben bevezetett V6-os (ami így még nem lehet veterán), de a többséget négyhengeres benzin- és dízelmotorok hajtották 88 lóerőtől (1.6i) 190 lóerőig terjedő teljesítménnyel (3.0i V6). A Használtautó.-hu-n a legöregebb Xantia, egy 1,9 literes, 90 lóerős turbodízel, ami 1997-es évjárata miatt csak négy év múlva kaphat OT rendszámot.",
    },
    {
      id: 2,
      title: "Chevrolet Camaro 4. generáció",
      description:
        "Nem hemzsegnek útjainkon a Chevrolet Camarók, érdekességként talán mégis érdemes megemlíteni, hogy ebben az évben immár a negyedik generáció is beleérett a veteránkorba. Gyártása ugyan már 1992 novemberében elkezdődött, de árusítása csak 1993 januárjában kezdődött, így idén januártól lehet esélye OT rendszámot kapni. A General Motors F jelű padlólemezére épülő generáció újdonsága volt, hogy több karosszériaeleme üvegszál erősítéses műanyagból készült. Alapmotorja 160 lóerős, 3,4 literes V6-os benzines volt, amihez ötfokozatú kézi sebességváltót társítottak. Legmenőbb kivitele a Z28-as, amely a Corvette LT1 jelű 5,7 literes, 275 lóerős V8-asát kapta meg választhatóan négyfokozatú automataváltóval, vagy hatfokozatú kézi sebességváltóval. Cikkünk írásakor a Használtautó.hu-n árultak egy 1994-es Z28-ast, ami ugyan idén még nem, de jövőre már pályázhat a veteránminősítésre.",
    },
    {
      id: 3,
      title: "Fiat Punto",
      description:
        "Szembe kell néznünk vele, hogy bizony, már ez a valaha oly népszerű olasz kisautó első példányai is OT rendszámot kaphatnak. Fogadtatása annyira kedvező volt, hogy egyrészt elnyerte az 1995-ös Év Autója díjat (a teljes paletta 1994-ben állt fel), másrészt 1996-ban egész Európában a Puntóból adtak el legtöbbet. Alacsony árának, széles motorpalettájának és praktikus belső terének köszönhetően nálunk is jól fogyott, amit talán az is jelez, hogy a Használtautó.hu-n még mindig huszonhármat árulnak az első generációból. Veteránvizsgára érett azonban nincs közöttük, a legöregebbek 1995 áprilisiak. Bár dízelt is kínáltak belőle, a legtöbb Puntót 1,1 és 1,2 literes benzinmotorokkal vásárolták. A legérdekesebb motorváltozat azonban a 136 lóerős 1,4-es turbó, karosszériaváltozat pedig a kisautók között ritkaságszámba menő kabrió.",
    },
    {
      id: 4,
      title: "Ford Mondeo",
      description:
        "A Punto mellett a másik idei veteránkort elérő kiemelkedő típus a Ford Mondeo. A hátsókerék-hajtású Sierrát felváltó, világautónak szánt (Amerikában Ford Contour és Mercury Mystique néven árulták), elsőkerék-hajtásos, teljesen új konstrukciójú Mondeo praktikusságával és korántsem utolsó sorban jó vezethetőségével nemcsak a nagyközönség, hanem az Év Autója zsűri tagjainak tetszésével is találkozott, akik neki ítélték az 1994-es év díját. Alapkivitelében 1,6 literes benzinmotorral árulták, de népszerű volt az 1,8 literes dízelmotoros változat is. Értékesebb veteránként a két és félliteres, V6-os motorral hajtott változatok (1994-től), és azok közül is leginkább a 205 lóerős ST200 jelű kivitel jöhet szóba. Utóbbinak azonban még várnia kell az OT minősítésre, hiszen csak az utolsó évben 1999-ben kezdték árulni a már frissítés (1996) utáni (szaloncukor elejű) modellben. Első generációs Mondeóból huszonnyolcat találtam a Használtautó.hu-n, amiből kora miatt három is pályázhat idén a veterán státuszra.",
    },
  ];

  return (
    <Box style={{ backgroundColor: "lightgray" }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("Details", { id: item.id })}
            rounded="8"
            overflow="hidden"
            borderWidth="1"
            borderColor="#B65EFF"
            maxW="100%"
            bg="coolGray.100"
            p="5"
            m="5"
          >
            <Box>
              <Heading>{item.title}</Heading>
              <Text>{item.description}</Text>
            </Box>
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </Box>
  );
};

export default BlogPosts;
