import { useSession } from "../../Services/useSession";
import MyLearningList from "./MyLearningList";
import { useMyLearning } from "./useMyLearning";

function MyLearning() {
  const { session } = useSession();
  const userId = session?.user?.id;
  const { myLearning } = useMyLearning(userId);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">My Learning</h1>
      {myLearning?.map((item, index) => (
        <MyLearningList key={index} item={item} />
      ))}
    </div>
  );
}

export default MyLearning;
