import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchPopularSeries } from "../../store/seriesslice/actions/getpopularseries";
import type { Series } from "../../types/series";
import SeriesScroll from "./SeriesScroll/SeriesScroll";

const SeriesListPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const series = useAppSelector((state) => state.series.series);

  useEffect(() => {
    dispatch(fetchPopularSeries());
  }, [dispatch]);

  if (!series) return <div>Loading...</div>;

  const handleSeriesClick = (item: Series) => {
    navigate(`/series/${item.id}`);
  };

  return (
    <div>
      <SeriesScroll
        header="Popular Series"
        series={series}
        onClick={handleSeriesClick}
        postion="Vertical"
      />
    </div>
  );
};

export default SeriesListPage;