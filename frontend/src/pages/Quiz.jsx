import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, RotateCcw, Trophy, Clock, BookOpen, ArrowRight, ExternalLink, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { quizQuestions } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [showTopicReview, setShowTopicReview] = useState(false);

  useEffect(() => {
    let timer;
    if (!showResult && !quizCompleted && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && !showResult) {
      handleAnswer(null);
    }
    return () => clearTimeout(timer);
  }, [timeLeft, showResult, quizCompleted]);

  const handleAnswer = (answerIndex) => {
    const question = quizQuestions[currentQuestion];
    const isCorrect = answerIndex === question.correct;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const newAnswer = {
      questionId: question.id,
      selectedAnswer: answerIndex,
      correct: question.correct,
      isCorrect
    };
    
    setAnswers([...answers, newAnswer]);
    
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(30);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setTimeLeft(30);
    setQuizCompleted(false);
    setAnswers([]);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (percentage) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  // Konu eşleştirmeleri - hangi topic hangi sayfaya gidiyor
  const topicPageMap = {
    'organeller': { path: '/molecules', title: 'Molekül Modelleri', description: 'Kloroplast yapısı ve organeller' },
    'calvin-cycle': { path: '/process', title: 'Fotosentez Süreci', description: 'Calvin döngüsü ve karanlık reaksiyonları' },
    'enzymes': { path: '/reactions', title: 'Reaksiyonlar', description: 'RuBisCO enzimi ve kataliz' },
    'light-reactions': { path: '/reactions', title: 'Işık Reaksiyonları', description: 'Fotosistem I & II, ATP üretimi' },
    'pigments': { path: '/molecules', title: 'Klorofil ve Pigmentler', description: 'Işık yakalama molekülleri' }
  };

  // Yanlış yapılan soruların konularını analiz et
  const getWrongTopics = () => {
    const wrongAnswers = answers.filter(answer => !answer.isCorrect);
    const wrongTopics = wrongAnswers.map((answer, index) => {
      const questionIndex = answers.indexOf(answer);
      const question = quizQuestions[questionIndex];
      return {
        topic: question.topic,
        question: question.question,
        explanation: question.explanation,
        page: topicPageMap[question.topic] || { path: '/process', title: 'Genel Tekrar', description: 'Fotosentez genel konuları' }
      };
    });
    
    // Benzersiz konuları groupla
    const uniqueTopics = wrongTopics.reduce((acc, curr) => {
      const existing = acc.find(item => item.topic === curr.topic);
      if (!existing) {
        acc.push(curr);
      }
      return acc;
    }, []);
    
    return uniqueTopics;
  };

  const handleTopicReview = () => {
    setShowTopicReview(true);
  };

  if (quizCompleted) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Trophy className={`h-16 w-16 ${getScoreColor(percentage)}`} />
              </div>
              <CardTitle className="text-3xl">Quiz Tamamlandı!</CardTitle>
              <CardDescription>Tebrikler! Fotosentez quizini tamamladınız.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className={`text-6xl font-bold ${getScoreColor(percentage)}`}>
                  {percentage}%
                </div>
                <p className="text-xl text-gray-600">
                  {quizQuestions.length} sorudan {score} tanesini doğru cevapladınız
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Detaylı Sonuçlar</h3>
                  <div className="space-y-3">
                    {answers.map((answer, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white rounded border">
                        <span className="text-sm">Soru {index + 1}</span>
                        <div className="flex items-center space-x-2">
                          {answer.isCorrect ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-600" />
                          )}
                          <Badge className={getDifficultyColor(quizQuestions[index].difficulty)}>
                            {quizQuestions[index].difficulty}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <Button onClick={resetQuiz} className="bg-green-500 hover:bg-green-600">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Tekrar Çöz
                  </Button>
                  <Button variant="outline" onClick={handleTopicReview}>
                    <BookOpen className="h-4 w-4 mr-2" />
                    Konuları Tekrar Et
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fotosentez Quiz
          </h1>
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
            <div>Soru {currentQuestion + 1} / {quizQuestions.length}</div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span className={timeLeft <= 10 ? 'text-red-600 font-bold' : ''}>{timeLeft}s</span>
            </div>
            <div>Skor: {score}/{currentQuestion + (showResult ? 1 : 0)}</div>
          </div>
          <Progress value={progress} className="mt-4 max-w-md mx-auto" />
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge className={getDifficultyColor(question.difficulty)}>
                {question.difficulty}
              </Badge>
              <Badge variant="outline">{question.topic}</Badge>
            </div>
            <CardTitle className="text-xl leading-relaxed">
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`w-full text-left justify-start h-auto p-4 ${
                    showResult
                      ? index === question.correct
                        ? 'bg-green-100 border-green-500 text-green-800'
                        : selectedAnswer === index
                        ? 'bg-red-100 border-red-500 text-red-800'
                        : 'opacity-50'
                      : selectedAnswer === index
                      ? 'bg-blue-100 border-blue-500'
                      : 'hover:bg-gray-50'
                  }`}
                  disabled={showResult}
                  onClick={() => !showResult && handleAnswer(index)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${
                      showResult && index === question.correct
                        ? 'border-green-500 bg-green-500 text-white'
                        : showResult && selectedAnswer === index && index !== question.correct
                        ? 'border-red-500 bg-red-500 text-white'
                        : 'border-gray-300'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="flex-1">{option}</span>
                    {showResult && index === question.correct && (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    )}
                    {showResult && selectedAnswer === index && index !== question.correct && (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                </Button>
              ))}
            </div>

            {showResult && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Açıklama:</h4>
                <p className="text-blue-700 text-sm">{question.explanation}</p>
                <div className="flex justify-end mt-4">
                  <Button onClick={nextQuestion}>
                    {currentQuestion < quizQuestions.length - 1 ? (
                      <>
                        Sonraki Soru
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </>
                    ) : (
                      'Sonuçları Gör'
                    )}
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;