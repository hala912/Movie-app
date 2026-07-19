import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchPopularSeries } from "../../store/seriesslice/actions/getpopularseries";
import SeriesScroll from "./SeriesScroll/SeriesScroll";

const DramaPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const series = useAppSelector((state) => state.series.series);

  useEffect(() => {
    dispatch(fetchPopularSeries());
  }, [dispatch]);

  if (!series) return <div>Loading...</div>;


  return (
    <div>
      <SeriesScroll
        header="Popular Series"
        series={series}
        onClick={(series)=>{ navigate(`/series/${series.id}`);}}
        postion="Vertical"
        className="library-override"
      />
    </div>
  );
};

export default DramaPage;