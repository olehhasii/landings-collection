import "./LandingLayoutStyle.scss";

const LandingLayout = ({ landingClassName, children }) => {
  return <main className={landingClassName}>{children}</main>;
};

export default LandingLayout;
