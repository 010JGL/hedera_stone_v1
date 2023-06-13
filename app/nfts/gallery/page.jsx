"use client";

import { Card, Grid, Row, Text } from "@nextui-org/react";

import example from "../../../public/images/headstone-example.jpg";

export default function Gallery() {
  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Cherry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
  ];

  return (
    <main>
      <h1 className="title">Gallery</h1>


      <div className="cards-container">
        <Grid.Container gap={2} justify="flex-start">
          {list.map((item, index) => (
            <Grid xs={6} sm={3} key={index}>
              <Card isPressable>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={"https://nextui.org" + item.img}
                    objectFit="cover"
                    width="100%"
                    height={240}
                    alt={item.title}
                  />
                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                  <Row wrap="wrap" justify="space-between" align="center">
                    <Text b>{item.title}</Text>
                    <Text
                      css={{
                        color: "$accents7",
                        fontWeight: "$semibold",
                        fontSize: "$sm",
                      }}
                    >
                      {item.price}
                    </Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </div>
    </main>
  );
}

// {/* <Row xs={1} md={2} className="g-4">
// {Array.from({ length: 4 }).map((_, idx) => (
//   <Col key={idx}>
//     <Card style={{ width: '401px' }}>
//       {/* <Image src={example}></Image> */}
//       <Card.Img variant="top" src={example} />
//       {/* <Image
//         src={example}
//         width={400}
//         height={250}
//         alt="Picture of the author"
//       ></Image> */}
//       <Card.Body>

//         <Card.Text>
//           Description
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   </Col>
// ))}
// </Row> */}
