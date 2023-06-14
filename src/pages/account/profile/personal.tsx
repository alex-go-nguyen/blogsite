import Input from '@/components/Input/Input';
import Avatar from '@/components/avatar/Avatar';
import Button from '@/components/button/Button';
import { useAuth } from '@/components/context/auth';
import { updateUser } from '@/redux/features/users/userDetailSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { UpdateUserPayload } from '@/services/user/users.dto';
import { getAvatarUser } from '@/utils/media';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { mixed, object, string } from 'yup';

export interface PersonalProps {}

const schema = object({
  avatar: mixed(),
  about: string(),
  name: string().required('required'),
  major: string(),
});

export default function Personal(props: PersonalProps) {
  const { user } = useAuth();

  const dispatch = useAppDispatch();

  const { data, loading, error } = useAppSelector((state) => state.userDetail);

  const { register, handleSubmit } = useForm<UpdateUserPayload>({ resolver: yupResolver(schema) });

  useEffect(() => {
    if (data && !loading) {
      alert('updated user');
    }
  }, [data, loading]);

  if (!user) return null;

  const onSubmitHandler = (payload: UpdateUserPayload) => {
    dispatch(updateUser({ user, payload }));
  };

  return (
    <div>
      <h1 className=" text-3xl mb-2">Personal Info</h1>
      <p>Manage your personal info. </p>

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="my-8 flex justify-center">
          <Avatar src={user.avatar && getAvatarUser(user.avatar)} width={100} height={100} alt={user.name} />
          <input {...register('avatar')} type="file" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4 col-span-2">
            <span className="text-sm font-thin">Username</span>
            <Input disabled value={user.username} />
          </div>
          <div className="mb-4">
            <span className="text-sm font-thin">
              <span className="text-red-500">*</span> Display Name
            </span>
            <Input {...register('name')} defaultValue={user.name} />
          </div>
          <div className="mb-4">
            <span className="text-sm font-thin">Major</span>
            <Input {...register('major')} defaultValue={user.major} />
          </div>
          <div className="mb-4 col-span-2">
            <span className="text-sm font-thin">About you</span>
            <Input {...register('about')} defaultValue={user.about} />
          </div>
        </div>
        <Button type="submit" variant="solid" className="float-right ml-4">
          Submit
        </Button>
        <Button type="button" variant="outlined" className="float-right">
          Cancel
        </Button>
      </form>
    </div>
  );
}

Personal.Layout = 'UserManagement';
