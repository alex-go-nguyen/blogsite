import Input from '@/components/Input/Input';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useEffect, useState } from 'react';

export interface IPostBlogProps {}

export default function PostBlog(props: IPostBlogProps) {
  const [data, setData] = useState('');
  const [editorLoaded, setEditorLoaded] = useState(false);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div>
      <div className="mb-4">
        <span className="text-sm font-thin">
          <span className="text-red-500">*</span> Title
        </span>
        <Input placeholder="Title" />
      </div>

      <div className="mb-4">
        <span className="text-sm font-thin">
          <span className="text-red-500">*</span> Description (SEO)
        </span>
        <Input placeholder="Description" />
      </div>
      <div className="mb-4">
        {/* <CKEditor
          editor={ClassicEditor}
          data={value}
          onChange={(_: any, editor: any) => {
            const data = editor.getData();
            onChange(data);
          }}
        /> */}
      </div>
    </div>
  );
}

PostBlog.Layout = 'UserManagement';
