import React from 'react'
import { Leadership_profile_card } from "../../Leadership/component/Leadership_profile_card";
import youth_img from "../../../assets/ministry-banner.jpg";
import women_img from "../../../assets/contact_hero.jpg";
import men_img from "../../../assets/contact_hero.jpg";
import children_img from "../../../assets/children-ministry.jpg";
import media_img from "../../../assets/media-ministry.jpg";
import evangelism_img from "../../../assets/envangelism.jpg";

export const Explore_ministry:React.FC = () => {
     const ministries = [
    {
      id: 1,
      pastor_name: "Youth Ministry",
      title: "",
      description:
        "BGM has a very functional youth ministry. We know that God is very interested in the youths of this generation, and so is the devil. To this end, the ministry is very committed in ensuring the youths are reached by all possible means. Programs are put together as close intervals to gather these youths; they are motivated, educated and inspired to live their lives to the glory of God. Their key leaders are drawn from all parts of Nigeria, to help foster an even greater movement among the youth fellowship.",
      img: youth_img,
    },
    {
      id: 2,
      pastor_name: "Women’s Ministry",
      title: "",
      description:
        "We all know that the earth would have been boring and handicapped if God didn’t create a woman, and empowered her to make things beautiful. By the grace of God, BGM is blessed with action and dedicated women, who are using their gifts to the glory of God and the expansion of the ministry. Through retreats and conferences, women are gathered every now and then, where they are empowered and instructed with the Word of God to be virtuous wherever they find themselves.",
      img: women_img,
    },
    {
      id: 3,
      pastor_name: "Men’s Ministry",
      title: "",
      description:
        "BGM believes that the men are the pillars of the church. Therefore, we are concerned with the all-round growth and welfare of every man in our ministry. To this end, we organize programs and events that help to bring together men from all walks of life, under an atmosphere of love and unity, and the Word of God is used to empower and enlighten to be fathers and leaders wherever they find themselves.",
      img: men_img,
    },
    {
      id: 4,
      pastor_name: "Children’s Evangelism Ministry",
      title: "",
      description:
        "Children Evangelism Ministry(CEM) works to meet the total need of the child today, so as to fully prepare them for life. Hence, the motto of Children Evangelism is “Train up the child now as a solid foundation for a better tomorrow.” Our concern has been for children to be with the gospel of the Lord Jesus Christ and that they are discipled in such a way that they are like Jesus physically, spiritually, mentally and socially in accordance with Luke 2:52. To this end, in our conferences and other evangelistic efforts, we correct the neglect of children and to impact the life of Christ to Children for the continuity of the church and a better society.",
      img: children_img,
    },
    {
      id: 5,
      pastor_name: "Media Ministry",
      title: "",
      description:
        "The Media Ministry is committed to spreading the Gospel through sound, visuals, and digital innovation. We capture, produce, and share life-changing messages, worship moments, and church events that inspire, educate, and draw people closer to God. Every image, video, and recording is a tool for evangelism and discipleship.",
      img: media_img,
    },
    {
      id: 6,
      pastor_name: "Evangelism Ministry",
      title: "",
      description:
        "Passionate about reaching the lost and spreading the gospel through community outreach and missions.",
      img: evangelism_img,
    },
  ];
  return (
    <section className="py-20 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tex">Explore Our Ministries</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Each ministry is a vital part of our mission — serving different groups, nurturing gifts, and expanding the Kingdom of God.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
          {ministries.map((ministry) => (
            <Leadership_profile_card
              key={ministry.id}
              id={ministry.id}
              img={ministry.img}
              pastor_name={ministry.pastor_name}
              title={ministry.title}
              description={ministry.description}
            />
          ))}
        </div>
      </section>
  )
}
