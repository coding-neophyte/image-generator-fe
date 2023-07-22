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

  const randomPromptHandler = () => {
    const randomPrompt = getRandomPrompts(formData.prompt);
    setFormData({...formData, prompt: randomPrompt})
  };


  const handleImageGeneration = () => {};

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
            placeholder="Ex: 'A comic book cover of a superhero wearing headphones'"
            value={formData.prompt}
            handleChange={handleChange}
            isGeneratingImage
            randomPromptHandler={randomPromptHandler}
          />
          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {formData.photo ? (
              <img
                src={formData.photo}
                alt={formData.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview image"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}
            {isGeneratingImage && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={handleImageGeneration}
            className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {isGeneratingImage ? 'Image Generating...' : 'Generate Image'}
          </button>
        </div>
        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-14px">
            You can share your created images with other users
          </p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {isLoading ? 'Sharing Image...' : 'Share Image'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
