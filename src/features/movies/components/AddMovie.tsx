import { CustomForm, CustomInput } from "../../../components/Elements/Form";
import { z } from "zod";
import { useContext, useState } from "react";
import Button from "../../../components/Elements/Button/Button";
import { Context } from "../../../store/Context";
import { toast } from "react-toastify";

const addMovieSchema = z.object({
  movieName: z.string(),
  rating: z.number(),
  duration: z.number(),
});

const initialValues = {
  movieName: "",
  rating: 0,
  duration: 30,
};

export const AddMovie = () => {
  const {addMovie} = useContext(Context)
  const [submitting, isSubmitting] = useState(false)

  const onSubmit = (values: typeof initialValues) => {
    try {
      isSubmitting(true)
      addMovie({
        movieName: values.movieName,
        rating:  String(values.rating),
        duration: `${String(values.duration)} min `

      }) 
      isSubmitting(false)
      toast.success('Movie Added or Updated')

    } catch (error) {
      isSubmitting(false)
    }
  }

  return (
    <CustomForm<z.infer<typeof addMovieSchema>, typeof addMovieSchema>
      initialValues={initialValues}
      schema={addMovieSchema}
      onSubmit={onSubmit}
    >
      <CustomInput
        label="Movie Name"
        variant="standard"
        id="movieName"
        name="movieName"
        type="text"
      />
      <CustomInput
        label="Rating (0:Worst 100:Best)"
        variant="standard"
        id="rating"
        name="rating"
        type="number"
        min="0"
        max="100"
      />
      <CustomInput
        label="Duration (minutes)"
        variant="standard"
        id="duration"
        name="duration"
        type="number"
        min="1"

      />
      <Button variant="primary" size="lg" type="submit" isLoading={submitting}>Submit</Button>
    </CustomForm>
  );
};
