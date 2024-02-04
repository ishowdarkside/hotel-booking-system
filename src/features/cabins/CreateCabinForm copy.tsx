import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cabinInterface } from "../../types/cabinInterface";
import { createCabin } from "../../services/apiCabins";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";

function CreateCabinForm({
  setShowForm,
  cabin = {},
}: {
  setShowForm: (val: boolean) => void;
  cabin: cabinInterface;
}) {
  const { id: editId, ...editvalues } = cabin;

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm(defa);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (newCabin: cabinInterface) => createCabin(newCabin),
    onSuccess: () => {
      toast.success("Cabin created sccessfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data: cabinInterface) {
    mutate({ ...data, image: data.image[0] });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="Cabin Name"
        err={(errors.name?.message as string) || null}
      >
        <Input
          type="text"
          id="name"
          disabled={isPending}
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow
        label="Maximum capacity"
        err={errors.maxCapacity?.message as string | null}
      >
        <Input
          type="text"
          id="maxCapacity"
          disabled={isPending}
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Regular price"
        err={(errors.regularPrice?.message as string) || null}
      >
        <Input
          type="number"
          disabled={isPending}
          id="regularPrice"
          {...register("regularPrice", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="discount" err={errors.discount?.message as string | null}>
        <Input
          type="number"
          disabled={isPending}
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value < getValues().regularPrice ||
              "Discount should be less than regular price ",
          })}
        />
      </FormRow>

      <FormRow
        label="description"
        err={errors.description?.message as string | null}
      >
        <Textarea
          disabled={isPending}
          id="description"
          defaultValue=""
          {...register("description", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow
        label="Cabin Photo"
        err={(errors.image?.message as string) || null}
      >
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", { required: "Please provide cabin image" })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => setShowForm(false)}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isPending}>
          add cabin
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
