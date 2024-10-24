import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const GamesSection = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Available Games",
      cs2: "Counter-Strike 2",
      valorant: "Valorant",
      joinUs: "Join Us"
    },
    fr: {
      title: "Jeux Disponibles",
      cs2: "Counter-Strike 2",
      valorant: "Valorant",
      joinUs: "Nous Rejoindre"
    }
  };

  const { title, cs2, valorant, joinUs } = content[language];

  return (
    <section id="games-section" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-secondary">{title}</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="text-center group">
            <div className="w-64 h-36 bg-gradient-to-br from-yellow-400 to-blue-600 rounded-lg overflow-hidden flex items-center justify-center p-4 transform transition-transform duration-300 group-hover:scale-105">
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAABkCAYAAACQrepxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMDMtMTlUMTU6NDc6NDUrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDMtMTlUMTU6NDc6NDUrMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTAzLTE5VDE1OjQ3OjQ1KzAxOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ5YzFiMjQ5LTRmZTAtNDJiZC05ZDM0LTM2MDQ4MzU1ZjUyYiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM0ZjQ0ZTZiLTY0ZDAtYzU0OC1h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" 
                alt={cs2} 
                className="w-48 h-auto object-contain filter brightness-100 transition-all duration-300 group-hover:brightness-110" 
              />
            </div>
            <h3 className="text-xl font-semibold text-secondary mt-4">{cs2}</h3>
          </div>
          <div className="text-center group">
            <div className="w-64 h-36 bg-gradient-to-br from-red-500 to-blue-600 rounded-lg overflow-hidden flex items-center justify-center p-4 transform transition-transform duration-300 group-hover:scale-105">
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMDMtMTlUMTU6NDc6NDUrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDMtMTlUMTU6NDc6NDUrMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTAzLTE5VDE1OjQ3OjQ1KzAxOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ5YzFiMjQ5LTRmZTAtNDJiZC05ZDM0LTM2MDQ4MzU1ZjUyYiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM0ZjQ0ZTZiLTY0ZDAtYzU0OC1hZWE1LTZiZjI5ZWM5ZjQ5YyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjQ5YzFiMjQ5LTRmZTAtNDJiZC05ZDM0LTM2MDQ4MzU1ZjUyYiIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ5YzFiMjQ5LTRmZTAtNDJiZC05ZDM0LTM2MDQ4MzU1ZjUyYiIgc3RFdnQ6d2hlbj0iMjAyNC0wMy0xOVQxNTo0Nzo0NSswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7whJ3wAABGVJREFUeJzt3U9IVHscxvHnzKjNQBsXgUKCuHDhIjAI2gQuXLjoD7QM2rQR2kQLN21atAjaBG3ctBFaWIugRQsRWkQLEVoEQosWIrRoIYHkQoXJRdNvMWPm/s7vzLnnPg94Nnofc+Z7z5x75pwzv0mpVCoBknQ5lVKp9JvvQZBSKpV+9z0GktTr9X8rlUo/+h4ISaVS6Sff4yBJjUbjn3K5/L3vwZCkRqPxr+9xkKR2u/1vpVL51vdgSGq1Wt/4HgdJarfbX1cqlW98D4akVqv1te9xkKROp/NVuVz+0vdgSGq321/4HgdJ6nQ6/ymXy5/7HgxJnU7nc9/jIEndbnfwWblc/sz3YEjqdruf+h4HSep2u4NPy+XyJ74HQ1Kv1/vY9zhIUq/X+6RcLn/kezAk9Xq9j3yPgyT1+/2Py+XyR74HQ1K/3//Q9zhIUr/f/7BcLn/gezAkDQaDD3yPgyQNBoMPyuXy+74HQ9JgMHjf9zhI0nA4fL9cLr/nezAkDYfD93yPgyQNh8P3SqXSu74HQ9JwOHzH9zhI0mg0erdUKr3jezAkjUajt32PgyRdXFy8XSqV3vI9GJIuLi7e9D0OknRxcfFGqVR6w/dgSLq4uHjd9zhI0ng8fr1UKr3mezAkjcfjV32PgyRNJpNXS6XSK74HQ9JkMnnZ9zhI0mQyeblUKr3kezAkTSaTl3yPgyRNp9OXSqXSi74HQ9J0On3B9zhI0nQ6faFUKj3vezAkTafT53yPgyTNZrPnSqXSs74HQ9JsNnvG9zhI0mw2e7pUKj3tezAkzWazp3yPgyTN5/OnSqXSk74HQ9J8Pn/S9zhI0nw+f6JUKj3hezAkzefzx32PgyQtFovHS6XS474HQ9JisXjM9zhI0mKxeLRUKj3mezAkLRaLR3yPgyQtFotHSqXSo74HQ9JisXjY9zhI0nK5fLRUKj3mezAkLZfLR3yPgyQtl8tHSqXSo74HQ9JyuXzY9zhI0mq1erhUKj3iezAkrVarh3yPgyStVquHSqXSQ74HQ9JqtXrQ9zhI0nq9frBUKj3oezAkrdfrB3yPgyStVqsHSqXS/b4HQ9J6vb7f9zhI0mazub9UKt3nezAkbTab+3yPgyRtNpv7SqXSvb4HQ9Jms7nX9zhI0na7vadUKt3jezAkbbfbPb7HQZK22+3dUqm02/dgSNput7t9j4Mk7Xa73aVSaZfvwZC02+12+h4HSdrtdjtLpdJO34Mhabfb7fA9DpK02+12lEqldt+DIWm32233PQ6StNvttpdKpTbfgyFpt9tt8z0OkrTf77eVSqVW34Mhab/fb/U9DpK03++3lkqlFt+DIWm/32/xPQ6SdHBw0FwqlZp9D4akg4ODZt/jIEkHBwfNpVKpyfdgSDo4OGjyPQ6SdHh42FgqlRp9D4akg4ODRt/jIEmHh4cNpVKpwfdgSDo8PGzwPQ6SdHR0VF8qler/94Ner9fvdDq/+h4cSTo6OqovlUr1/+O/f+10Or/0er2+7wGSdHR0VH/5+38BNYmb4rBrwnEAAAAASUVORK5CYII=" 
                alt={valorant} 
                className="w-48 h-auto object-contain filter brightness-100 transition-all duration-300 group-hover:brightness-110" 
              />
            </div>
            <h3 className="text-xl font-semibold text-secondary mt-4">{valorant}</h3>
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="#join-us"
            className="bg-primary text-white px-8 py-3 rounded-md hover-primary button-transition inline-block transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            {joinUs}
          </a>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;