import { TypeQuestion } from '@/data/types';
import { LanguageContext } from '@/layout/default';
import { useContext, useState } from 'react';
import Typography, { TYPOGRAPHY_TYPE } from './atoms/Typography';
import CardQuestion from './CardQuestion';

export default function Questions({ questions }: { questions: TypeQuestion[] }) {
  const { data } = useContext(LanguageContext);
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(0);

  return (
    <>
      <Typography className="w-full text-center sm:text-left" type={TYPOGRAPHY_TYPE.HEADING3}>
        {data.about.questions.title}
      </Typography>
      <div className="flex flex-col pt-y-default">
        {questions.map((question, index) => (
          <CardQuestion
            onClick={() => setOpenQuestionIndex(index === openQuestionIndex ? null : index)}
            isOpen={openQuestionIndex === index}
            key={question.questionEn + index}
            {...question}
          />
        ))}
      </div>
    </>
  );
}
