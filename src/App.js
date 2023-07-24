import { useEffect, useState } from 'react'
import Expenses from './components/expenses/Expenses'
import NewExpense from './components/new-expense/NewExpense'
import './App.css'
import Header from './components/header/Header'
import Login from './components/login/Login'
import Users from './components/users/Users'
import ConfirmModal from './components/UI/modal/ConfirmModal'

function App() {
	const [expenses, setExpenses] = useState([]);
	const [isLogged, setIsLogged] = useState(false);
	const [showUsers, setShowUsers] = useState(false);
	const [showHeader, setShowHeader] = useState(false);
	const [showConfirmModal, setShowConfirmModal] = useState(false);

	const addNewExpenseHandler = (newExpense = {}) => {
		setExpenses((prevExpenses) => {
			return [...prevExpenses, newExpense]
		})

		localStorage.setItem(
			'EXPENSES',
			JSON.stringify([...expenses, newExpense]),
		)
	}

	useEffect(() => {
		const savedExpenses = JSON.parse(localStorage.getItem('EXPENSES')) || []
		setExpenses(
			savedExpenses.map((e) => ({ ...e, date: new Date(e.date) })),
		)
		const storedIsLogged = localStorage.getItem('isLogged');
			if (storedIsLogged === 'true') {
			setIsLogged(true);
			setShowHeader(true);
			}else {
				setIsLogged(false);
				setShowHeader(false);
			  }
	}, [])

	function deleteExpenseByIdHandler(id) {
		setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id)
		)

		localStorage.setItem(
			'EXPENSES',
			JSON.stringify(expenses.filter((expense) => expense.id !== id))
		)
	}
	const handleLogin = () => {
		setIsLogged(true);
		setShowHeader(true);
		localStorage.setItem('isLogged', 'true');
	  };
	
	
	const handleLogout = () => {
		setShowConfirmModal(true); 
	  };
	
	  const handleConfirmLogout = () => {
		setShowConfirmModal(false); 
		setIsLogged(false);
		setShowHeader(false);
		setShowUsers(false);
		localStorage.removeItem('isLogged');
	  };
	
	  const handleCancelLogout = () => {
		setShowConfirmModal(false);
	  };

	  const handleUsersClick = () => {
		setShowUsers(true);
	  };

	return (
		<>
      {!isLogged && <Login onLogin={handleLogin} />}
      {isLogged && showHeader && (<>
        <Header onLogout={handleLogout} onUsersClick={handleUsersClick} />
		{isLogged && showUsers && <Users />}
          <NewExpense onAddNewExpense={addNewExpenseHandler} />
          <Expenses expenses={expenses} onDeleteExpense={deleteExpenseByIdHandler} />
        </>
      )}
	  {showConfirmModal && (
        <ConfirmModal
          onConfirm={handleConfirmLogout}
          onCancel={handleCancelLogout}
        />
      )}
      </>
	)


	
}

export default App
