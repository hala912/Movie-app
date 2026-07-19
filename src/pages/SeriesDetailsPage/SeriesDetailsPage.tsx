import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import fetchSeriesDetails from "../../store/seriesslice/actions/getseriesdetails";
import SeriesCard from "../../componants/seriescard/seriescard";

const SeriesDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const series = useAppSelector((state) => state.series.SeriesDetails);

  useEffect(() => {
    if (id) dispatch(fetchSeriesDetails(Number(id)));
  }, [id, dispatch]);

  if (!series) return <div>Loading...</div>;

  return <SeriesCard series={series}/>;
};

export default SeriesDetailsPage;