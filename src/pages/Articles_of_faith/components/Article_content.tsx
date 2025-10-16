import React from "react";
import { Leadership_profile_card } from "../../Leadership/component/Leadership_profile_card";
import hero_img from "../../../assets/about_banner_church_view.jpg";

export const Article_content: React.FC = () => {
  const articles = [
    {
      id: 1,
      pastor_name: "The Divine Authority of the Bible",
      title: "",
      description:
        "We believe that all Scripture is given by inspiration of God and is the final authority for faith and practice. (2 Timothy 3:16; 2 Peter 1:21)",
      img: hero_img,
    },
    {
      id: 2,
      pastor_name: "The Doctrine of Trinity",
      title: "",
      description:
        "We believe that the Godhead eternally exists in three persons — the Father, the Son, and the Holy Spirit — and that these three are one God. (Matthew 28:18-19; 2 Corinthians 13:14; Mark 12:29)",
      img: hero_img,
    },
    {
      id: 3,
      pastor_name: "The Fall of Man",
      title: "",
      description:
        "Man was originally created in the image and likeness of God. Through sin, man fell, losing his spiritual life and becoming subject to death and the power of the devil. (Genesis 1:26; Romans 3:10-19)",
      img: hero_img,
    },
    {
      id: 4,
      pastor_name:
        "The Atonement of Sin Through the Death, Resurrection, and Ascension of Christ",
      title: "",
      description:
        "We believe Jesus Christ, the eternal Son of God, came to redeem mankind through His sacrificial death, resurrection, and ascension. (Luke 1:30-35; John 1:18; Philippians 3:20)",
      img: hero_img,
    },
    {
      id: 5,
      pastor_name: "Justification by Faith Alone",
      title: "",
      description:
        "Salvation is by grace through faith in Christ alone. The moment one believes, they are justified before God and translated from death to life. (Colossians 1:13; Acts 13:19)",
      img: hero_img,
    },
    {
      id: 6,
      pastor_name: "Regeneration by the Holy Spirit",
      title: "",
      description:
        "No one can enter the Kingdom of God unless they are born again by the Holy Spirit. (John 3:5-8)",
      img: hero_img,
    },
    {
      id: 7,
      pastor_name: "Sanctification",
      title: "",
      description:
        "Sanctification is a work of God’s grace through the Holy Spirit, setting believers apart for God’s purpose — positionally, progressively, and ultimately. (John 17:17; Ephesians 4:24)",
      img: hero_img,
    },
    {
      id: 8,
      pastor_name: "Assurance of Salvation",
      title: "",
      description:
        "Every believer can be assured of their salvation, based on the unchanging promises of God in His Word. (1 John 5:13; Hebrews 10:22)",
      img: hero_img,
    },
    {
      id: 9,
      pastor_name: "The Church — A Unity of Believers",
      title: "",
      description:
        "All believers, united with Christ by the Holy Spirit, form the Church — the Body and Bride of Christ. (Matthew 16:18; Acts 2:42-47; Romans 12:5)",
      img: hero_img,
    },
    {
      id: 10,
      pastor_name: "The Holy Spirit",
      title: "",
      description:
        "The Holy Spirit, the third Person of the Trinity, indwells all believers, uniting them in Christ and empowering them for service. (John 14:16-17; 1 Corinthians 6:19)",
      img: hero_img,
    },
    {
      id: 11,
      pastor_name: "Christian Service and Rewards",
      title: "",
      description:
        "Believers are called to serve faithfully, knowing that eternal rewards await those who labor for Christ. (1 Corinthians 3:9-15; 2 Corinthians 5:10)",
      img: hero_img,
    },
    {
      id: 12,
      pastor_name: "The Great Commission",
      title: "",
      description:
        "It is the duty of every believer to reach the lost with the gospel and make disciples of all nations. (Matthew 28:18-20; Mark 16:15)",
      img: hero_img,
    },
    {
      id: 13,
      pastor_name: "The Blessed Hope — The Rapture",
      title: "",
      description:
        "We believe that Jesus will soon return to receive believers to Himself, both the living and those who have died in Him. (John 14:1-3; 1 Corinthians 15:51-52)",
      img: hero_img,
    },
    {
      id: 14,
      pastor_name: "The Tribulation",
      title: "",
      description:
        "Following the rapture, the world will experience a period of tribulation, marking the final judgment on the nations. (Daniel 9:27; Matthew 24:15-21)",
      img: hero_img,
    },
    {
      id: 15,
      pastor_name: "The Second Coming of Christ — The Millennial Age",
      title: "",
      description:
        "At the end of the Tribulation, Christ will return visibly to reign on earth for a thousand years, establishing peace and justice. (Revelation 20:1-6; Zechariah 14:4-9)",
      img: hero_img,
    },
    {
      id: 16,
      pastor_name: "The Eternal State",
      title: "",
      description:
        "The redeemed will dwell forever with God in glory, while those who reject Christ will face eternal punishment. (Luke 16:19-26; Revelation 20:11-15)",
      img: hero_img,
    },
    {
      id: 17,
      pastor_name: "Ordinances and Marriage",
      title: "",
      description:
        "We believe water baptism and the Lord’s Supper are ordinances of the Church. We also hold that marriage is a holy covenant instituted by God, symbolizing the union of Christ and His Church. (Matthew 28:19; Luke 22:19-20; Ephesians 5:31-32)",
      img: hero_img,
    },
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900">
          Our Articles of Faith
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          These are the core truths and doctrines that define our belief and
          guide our ministry as a church.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
        {articles.map((article) => (
          <Leadership_profile_card
            key={article.id}
            id={article.id}
            img={article.img}
            pastor_name={article.pastor_name}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
    </section>
  );
};
