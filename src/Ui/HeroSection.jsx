import Button from "./Button";
import Input from "./input";

function HeroSection() {
  return (
    <section className="bg-gray-900 text-white py-16 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Learn at Your Own Pace</h1>
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
