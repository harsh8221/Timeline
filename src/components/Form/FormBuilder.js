import { useState, useEffect } from 'react';
import FormField from './FormField';
import Button from '../Button';
import styles from './form.module.css';

const FormBuilder = ({ fields, onSubmit, submitButtonLabel }) => {
  const [formState, setFormState] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  useEffect(() => {
    const initialState = {};

    fields.forEach(field => {
      initialState[field.name] = field.defaultValue || '';
    });

    setFormState(initialState);
  }, [fields]);

  const handleChange = (name, value) => {
    setFormState({
      ...formState,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  }

  const validateForm = () => {
    const newErrors = {};

    fields.forEach(field => {
      if (field.required && !formState[field.name]) {
        newErrors[field.name] = `${field.displayText} is required`;
      } else if (field.validate) {
        const error = field.validate(formState[field.name]);
        if (!error) {
          newErrors[field.name] = `${field.displayText} validation Failed`;
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitSuccessful(false);

    if (validateForm()) {

      try {
        await onSubmit(formState);
        setIsSubmitSuccessful(true);
      } catch (error) {
        console.error("Form Submission Error: ", error);
        setErrors({ form: 'An error occurred while submitting the form' });
        setIsSubmitSuccessful(false);
      }

    }
    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      {fields.map(field => (
        <FormField
          key={field.name}
          {...field}
          value={formState[field.name]}
          onChange={(value) => handleChange(field.name, value)}
          error={errors[field.name]}
        />
      ))}
      <Button type='submit' disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Submitting...' : submitButtonLabel}
      </Button>
    </form>
  );
};

export default FormBuilder;