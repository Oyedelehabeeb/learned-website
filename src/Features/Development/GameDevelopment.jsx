import CourseCatalog from "../../Ui/CourseCatalog";
import { useGameDevelopment } from "./useGameDevelopment";
import { useGameDevelopmentInstructors } from "./useGameDevInstructors";
import { useFeaturedGameDev } from "./useFeaturedGameDev";
export default function GameDevelopment() {
  const { gameDevelopment, count, isLoading: loading, error, refetch } = useGameDevelopment();
  const { gameDevInstructors, count: instructorCount, isLoading: instructorsLoading, error: instructorsError, refetch: refetchInstructors } = useGameDevelopmentInstructors();
  const { featuredGameDev } = useFeaturedGameDev();
  return <CourseCatalog title="Game Development" description="Create immersive gaming experiences with cutting-edge development tools and techniques. Master Unity, Unreal Engine, and modern game programming concepts." subject="Development" slug="development" courses={gameDevelopment} count={count} instructors={gameDevInstructors} instructorCount={instructorCount} error={error} onRetry={refetch} instructorsError={instructorsError} onRetryInstructors={refetchInstructors} loading={loading} instructorsLoading={instructorsLoading} featured={featuredGameDev} />;
}
