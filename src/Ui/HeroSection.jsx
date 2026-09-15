import Button from "./Button";
import Input from "./input";

function HeroSection() {
  return (
    <section className="bg-canvas text-ink py-10 px-4 text-left">
      <h1 className="text-3xl font-bold mb-4">Learn at Your Own Pace</h1>
      <p className="text-lg mb-8">
        Explore our wide range of courses to find the one that suits you best.
      </p>
      <div className="max-w-md mx-auto">
        <Input />
        <Button />
      </div>
    </section>
  );
}

export default HeroSection;
