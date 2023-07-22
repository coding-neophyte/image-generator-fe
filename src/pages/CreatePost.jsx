import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import { getRandomPrompts } from '../utils';
import { Form, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const randomPromptHandler = () => {}

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Create and Share your own AI generated Images
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-16 max-w-3xl">
        <div className="flex flex-col gap-5">
          <Form
            labelText="Your Name"
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            handleChange={handleChange}
          />
          <Form
            labelText="Prompt"
            type="text"
            name="prompt"
            placeholder="A comic book cover of a superhero wearing headphones"
            value={formData.prompt}
            handleChange={handleChange}
            isGeneratingImage
            randomPromptHandler={randomPromptHandler}
          />
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
