import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, Plus, Minus } from 'lucide-react';

const GameOfLife = () => {
  const [rows] = useState(40);
  const [cols] = useState(60);
  const [grid, setGrid] = useState(() => 
    Array(40).fill().map(() => Array(60).fill(false))
  );
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(100);
  const [generation, setGeneration] = useState(0);
  const runningRef = useRef(running);
  runningRef.current = running;

  const operations = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1]
  ];

  const runSimulation = useCallback(() => {
    if (!runningRef.current) return;

    setGrid(g => {
      const newGrid = g.map((row, i) =>
        row.map((cell, j) => {
          let neighbors = 0;
          operations.forEach(([x, y]) => {
            const newI = i + x;
            const newJ = j + y;
            if (newI >= 0 && newI < rows && newJ >= 0 && newJ < cols) {
              if (g[newI][newJ]) neighbors++;
            }
          });

          if (cell && (neighbors < 2 || neighbors > 3)) return false;
          if (!cell && neighbors === 3) return true;
          return cell;
        })
      );
      return newGrid;
    });

    setGeneration(gen => gen + 1);
    setTimeout(runSimulation, speed);
  }, [operations, rows, cols, speed]);

  const handleCellClick = (i, j) => {
    const newGrid = grid.map((row, rowIdx) =>
      row.map((cell, colIdx) => 
        rowIdx === i && colIdx === j ? !cell : cell
      )
    );
    setGrid(newGrid);
  };

  const resetGrid = () => {
    setGrid(Array(rows).fill().map(() => Array(cols).fill(false)));
    setGeneration(0);
    setRunning(false);
  };

  const randomize = () => {
    setGrid(Array(rows).fill().map(() => 
      Array(cols).fill().map(() => Math.random() > 0.7)
    ));
    setGeneration(0);
  };

  useEffect(() => {
    if (running) {
      runSimulation();
    }
  }, [running, runSimulation]);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center p-4">
      <div className="bg-slate-800/50 backdrop-blur rounded-2xl shadow-2xl p-6 border border-slate-700">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Jeu de la Vie</h1>
          <div className="text-slate-300 text-sm">
            Génération: <span className="font-mono text-emerald-400">{generation}</span>
          </div>
        </div>

        <div 
          className="inline-block bg-slate-900 p-2 rounded-lg mb-4 border border-slate-700"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${cols}, 10px)`,
            gap: '1px'
          }}
        >
          {grid.map((row, i) =>
            row.map((cell, j) => (
              <div
                key={`${i}-${j}`}
                onClick={() => handleCellClick(i, j)}
                className={`w-[10px] h-[10px] cursor-pointer transition-all ${
                  cell 
                    ? 'bg-emerald-400 hover:bg-emerald-300 shadow-sm shadow-emerald-400/50' 
                    : 'bg-slate-800 hover:bg-slate-700'
                }`}
              />
            ))
          )}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setRunning(!running)}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors font-medium"
            >
              {running ? <Pause size={18} /> : <Play size={18} />}
              {running ? 'Pause' : 'Démarrer'}
            </button>
            <button
              onClick={resetGrid}
              className="flex items-center gap-2 px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors"
            >
              <RotateCcw size={18} />
              Réinitialiser
            </button>
            <button
              onClick={randomize}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              Aléatoire
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-300 text-sm">Vitesse:</span>
            <button
              onClick={() => setSpeed(Math.min(500, speed + 50))}
              className="p-1 bg-slate-600 hover:bg-slate-700 text-white rounded"
              disabled={speed >= 500}
            >
              <Minus size={16} />
            </button>
            <span className="text-slate-300 font-mono text-sm min-w-[60px] text-center">
              {speed}ms
            </span>
            <button
              onClick={() => setSpeed(Math.max(50, speed - 50))}
              className="p-1 bg-slate-600 hover:bg-slate-700 text-white rounded"
              disabled={speed <= 50}
            >
              <Plus size={16} />
            </button>
          </div>

          <div className="text-slate-400 text-xs mt-2">
            <p><strong>Règles:</strong></p>
            <p>• Une cellule vivante avec 2-3 voisins survit</p>
            <p>• Une cellule morte avec 3 voisins naît</p>
            <p>• Sinon, la cellule meurt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameOfLife;
