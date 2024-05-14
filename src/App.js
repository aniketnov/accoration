import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return <Accordion data={faqs} />;
}

function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          currOpen={currOpen}
          onopen={setCurrOpen}
          num={i + 1}
          title={el.title}
          key={i}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        currOpen={currOpen}
        onopen={setCurrOpen}
        num={22 + 1}
        title="We are hiring Electrical/ Mechanical Engineer"
        key="test1"
      >
        Hiring!!! We are hiring Electrical/ Mechanical Engineer B.tech/BE for
        the Pali (Rajsthan) Location for Operation and Maintenance with 1 to 3
        year experience . Freshers can also be considered based on Knowledge.
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, children, currOpen, onopen }) {
  const isOpen = num === currOpen;

  function handleIsopen() {
    onopen(isOpen ? null : num);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleIsopen}>
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

export default App;
