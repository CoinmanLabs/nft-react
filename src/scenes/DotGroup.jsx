import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        href="#home"
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("home")}
      />

      <AnchorLink
        href="#infos"
        className={`${
          selectedPage === "infos" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("infos")}
      />

      <AnchorLink
        href="#projects"
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("projects")}
      />

      <AnchorLink
        href="#team"
        className={`${
          selectedPage === "team" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("team")}
      />

      <AnchorLink
        href="#mint"
        className={`${
          selectedPage === "mint" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("mint")}
      />    

      <AnchorLink
        href="#contact"
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;
