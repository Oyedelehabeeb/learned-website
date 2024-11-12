/* eslint-disable react/prop-types */
function SocialMediaMarketingInstructors({ instructor }) {
  const { name, title, rating, avatarUrl } = instructor;
  return (
    <div className="flex gap-4 justify-between items-center border rounded-lg shadow hover:shadow-lg p-4 mt-[-30px]">
      <img
        src={avatarUrl}
        alt={name}
        className="w-20 h-20 object-cover rounded-full"
      />
      <div className="">
        <h3 className="text-xl font-semibold mt-3">{name}</h3>
        <p className="text-gray-600">{title}</p>
        <p className="">
          Instructor rating:{" "}
          <span className="text-yellow-500 font-bold">{rating} ★</span>
        </p>
      </div>
    </div>
  );
}

export default SocialMediaMarketingInstructors;
