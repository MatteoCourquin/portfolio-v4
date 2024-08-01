import { TypeQuestion } from '@/data/types';
import { LanguageContext } from '@/layout/default';
import clsx from 'clsx';
import { useContext } from 'react';
import { IconAdd } from './atoms/Icons';
import Typography, { TYPOGRAPHY_TYPE } from './atoms/Typography';

interface CardQuestionProps extends TypeQuestion {
  isOpen: boolean;
  onToggle: () => void;
}

const CardQuestion = ({
  isOpen,
  onToggle,
  questionFr,
  questionEn,
  answerFr,
  answerEn,
}: CardQuestionProps) => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="cursor-pointer border-t border-t-black py-6 md:py-10" onClick={onToggle}>
      <div className="flex items-center justify-between">
        <Typography className="!font-normal" type={TYPOGRAPHY_TYPE.HEADING5}>
          {language === 'fr' ? questionFr : questionEn}
        </Typography>
        <IconAdd
          className={clsx(isOpen ? 'rotate-[135deg]' : 'rotate-0', 'transition-transform')}
          size={42}
        />
      </div>
      <div
        className={clsx(
          'overflow-hidden transition-all',
          isOpen ? 'h-64 sm:h-52 md:h-36 lg:h-28' : 'h-0',
        )}
      >
        <Typography className="pt-4" type={TYPOGRAPHY_TYPE.TEXT}>
          {language === 'fr' ? answerFr : answerEn}
        </Typography>
      </div>
    </div>
  );
};

export default CardQuestion;
