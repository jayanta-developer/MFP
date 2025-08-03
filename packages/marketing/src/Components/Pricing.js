import React from "react";
import "./style.css";

//Images
import { Images } from "../../public/assets/Images";

export default function Pricing() {
  const cardData = [1, 1];

  return (
    <>
      <div className="sectionBox">
        <h1>Pricing Sectino</h1>
        <p>
          A paragraph is a distinct unit of writing, typically composed of
          multiple sentences, that focuses on a single idea or topic. It serves
          as a building block for longer pieces of text, helping to organize and
          structure information for the reader. Paragraphs are generally
          indicated by an indentation at the beginning of the first sentence.
        </p>
        <p>
          Paragraphs are used to group related sentences that develop a single
          idea or point. This helps readers follow the author's train of thought
          and understand the structure of the writing. While there's no strict
          rule for sentence length or number, a good paragraph typically
          contains a topic sentence that introduces the main idea, supporting
          sentences that provide details and examples, and potentially a
          concluding sentence that summarizes or transitions to the next
          paragraph.
        </p>

        <div className="sectionCardBox">
          {cardData?.map((_, i) => (
            <div key={i} className="productCard">
              <img src={Images.CardImg} />
              <p>$ 354</p>
              <button>Buy Now</button>
              <samp>
                {" "}
                here’s a quick outline of how your container and remote apps
                should be structured — let me know if you'd like the complete
                setup
              </samp>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
