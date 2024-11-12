/* eslint-disable react/prop-types */
function HomeList({ course }) {
  const { imageUrl } = course;
  return (
    <div>
      <img src={imageUrl} alt={course.title} />
    </div>
  );
}

export default HomeList;
