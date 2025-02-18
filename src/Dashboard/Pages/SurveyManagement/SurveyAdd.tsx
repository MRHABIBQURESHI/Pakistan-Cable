import React, { useState } from 'react';
import { Form, Input, DatePicker, Button, Row, Col, Select, Switch, Radio } from 'antd';
import { CopyOutlined, DeleteOutlined , CloseOutlined , PlusOutlined } from '@ant-design/icons';

interface Question {
  id: number;
  type: string;
  answer: string;
}

const SurveyAdd: React.FC<{ ratingId: number }> = ({ ratingId }) => {
  const [form] = Form.useForm();
  const [questions, setQuestions] = useState<Question[]>([]);

  const onFinish = (values: any) => {
    console.log('Form Values:', values);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { id: questions.length + 1, type: '', answer: '' }]);
  };

  const handleTypeChange = (value: string, questionId: number) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(question =>
        question.id === questionId ? { ...question, type: value } : question
      )
    );
  };
  // Input Multiple Chocie Option Func Start
  // Input Rating Option Func Start

  const [selectedEmoji, setSelectedEmoji] = useState<number | null>(null);

  const emojis = ['😡', '😕', '😐', '😊', '😍'];

  const handleSelect = (index: number) => {
    setSelectedEmoji(index);
  };
  // Input Rating Option Func End

  const [options, setOptions] = useState([
    { key: 'option1', label: 'Option 1', value: '' },
    { key: 'option2', label: 'Option 2', value: '' },
    { key: 'option3', label: 'Option 3', value: '' },
  ]);

  const addOption = () => {
    const newOption = {
      key: `option${options.length + 1}`,
      label: `Option ${options.length + 1}`,
      value: '',
    };
    setOptions([...options, newOption]);
  };

  const removeOption = (key: string) => {
    setOptions(options.filter(option => option.key !== key));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setOptions(
      options.map(option =>
        option.key === key ? { ...option, value: e.target.value } : option
      )
    );
  };


  // Input Multiple Chocie Option Func End


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add Survey</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Row gutter={16}>
          {/* Survey Name */}
          <Col xs={24} md={12}>
            <Form.Item
              label="Survey Name"
              name="surveyName"
              rules={[{ required: true, message: 'Please enter the survey name!' }]}
            >
              <Input className="w-full" placeholder="Enter survey name" />
            </Form.Item>
          </Col>

          {/* Survey Description */}
          <Col xs={24} md={12}>
            <Form.Item
              label="Survey Description"
              name="surveyDescription"
              rules={[{ required: true, message: 'Please enter the survey description!' }]}
            >
              <Input className="w-full" placeholder="Description (optional)" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          {/* Start Date */}
          <Col xs={24} md={12}>
            <Form.Item
              label="Start Date"
              name="startDate"
              rules={[{ required: true, message: 'Please select the start date!' }]}
            >
              <DatePicker className="w-full" />
            </Form.Item>
          </Col>

          {/* End Date */}
          <Col xs={24} md={12}>
            <Form.Item
              label="End Date"
              name="endDate"
              rules={[{ required: true, message: 'Please select the end date!' }]}
            >
              <DatePicker className="w-full" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          {/* Version */}
          <Col xs={24} md={12}>
            <Form.Item
              label="Version"
              name="version"
              rules={[{ required: true, message: 'Please enter the version!' }]}
            >
              <Input className="w-full" placeholder="Enter version" />
            </Form.Item>
          </Col>
        </Row>

        {/* Submit Button */}
        <Row gutter={16}>
          <Col xs={24} md={6} className="flex justify-end mt-7">
            <Form.Item className="!flex">
              <Button
                type="primary"
                htmlType="submit"
                style={{ backgroundColor: '#FF8548', marginRight: '9px' }}
                className="!p-3 w-full md:w-auto"
              >
                Save
              </Button>
              <Button
                type="primary"
                htmlType="button"
                onClick={handleAddQuestion}
                className="!p-3 w-full md:w-auto !bg-gray-200 !text-black"
              >
                + Add Question
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>

      {/* Display added questions */}
      {questions.map((question) => (
        <div key={question.id} className="mt-8">
          <h3 className="text-md text-green-800 font-bold mb-4">Your Question Here {question.id}</h3>
          <Row gutter={16}>
            {/* Left side - Input for question */}
            <Col xs={24} md={12}>
              <Form.Item
                name={`question_${question.id}`}
                rules={[{ required: true, message: `Please enter the question for Question ${question.id}` }]}
              >
                <Input placeholder="Enter your question" />
              </Form.Item>
            </Col>

            {/* Right side - Dropdown for question type */}
            <Col xs={24} md={12}>
              <Form.Item
                name={`questionType_${question.id}`}
                rules={[{ required: true, message: `Please select an option for Question ${question.id}` }]}
              >
                <Select
                  placeholder="Select Question Type"
                  onChange={(value:any) => handleTypeChange(value, question.id)}
                >
                  <Select.Option value="Multiple Choices">Multiple Choices</Select.Option>
                  <Select.Option value="Single Choice">Single Choice</Select.Option>
                  <Select.Option value="Rating">Rating</Select.Option>
                  <Select.Option value="Paragraph">Paragraph</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          {/* Display answer based on selected type */}
          {question.type === 'Rating' && (
             <Form.Item
             name={`answer_${ratingId}`}
             rules={[{ required: true, message: `Please provide a rating for Question ${ratingId}` }]}
           >
             <Row gutter={16}>
               {emojis.map((emoji, index) => (
                 <Col key={index}>
                   <div
                     onClick={() => handleSelect(index)}
                     style={{
                       fontSize: '30px',
                       cursor: 'pointer',
                       padding: '8px',
                       borderRadius: '50%',
                       backgroundColor: selectedEmoji === index ? '#bae7ff' : 'transparent',
                       transition: 'all 0.3s',
                     }}
                   >
                     {emoji}
                   </div>
                 </Col>
               ))}
             </Row>
           </Form.Item>
          )}

          {question.type === 'Multiple Choices' && (
            <>
              <Form.Item>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Radio.Group>
                {options.map(option => (
                  <div
                    key={option.key}
                    className="flex items-center justify-between mb-2 border-b-1"
                  >
                    <div className="flex items-center">
                      <Radio className='!my-auto whitespace-nowrap' value={option.key}></Radio>
                      <Input
                        
                        placeholder={`${option.label}`}
                        value={option.value}
                        onChange={(e:any) => handleInputChange(e, option.key)}
                        className="ml-4 !w-[480px] !border-none !outline-none !focus-none !border-0"
                      />
                    </div>
                    <CloseOutlined
                    className='ms-5'
                      onClick={() => removeOption(option.key)}
                      style={{ fontSize: '16px', color: 'gray', cursor: 'pointer' }}
                    />
                  </div>
                ))}
              </Radio.Group>
            </Col>
          </Row>
        </Form.Item>
        <Button
          type="dashed"
          icon={<PlusOutlined />}
          onClick={addOption}
          className="mb-5"
        >
          Add Option
        </Button>
            </>
          )}

          {question.type === 'Single Choice' && (
            <Form.Item
              
              name={`answer_${question.id}`}
              rules={[{ required: true, message: `Please provide an answer for Question ${question.id}` }]}
            >
              <Input placeholder="Provide Single Choice Answer" />
            </Form.Item>
          )}

          {question.type === 'Paragraph' && (
            <Form.Item
              
              name={`answer_${question.id}`}
              rules={[{ required: true, message: `Please provide an answer for Question ${question.id}` }]}
            >
              <Input.TextArea placeholder="Write your Paragraph" />
            </Form.Item>
          )}
          <Form.Item
          >
             <div className='flex justify-between'>
             <button className='bg-[#FF8548] text-white py-2 px-6 rounded'>Save</button>
             <div className='flex gap-2'>
             <DeleteOutlined className='h-10 w-10' />
             <CopyOutlined className='h-10 w-10' />
             <div className='font-bold flex justify-center gap-3 mt-2'>Required <Switch /></div>
             </div>
             </div>
            </Form.Item>
        </div>
      ))}
    </div>
  );
};

export default SurveyAdd;
