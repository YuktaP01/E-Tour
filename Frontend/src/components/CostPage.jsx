// src/components/CostPage.js
import "./CostPage.css"
import React, { useState, useEffect } from 'react';
import { getAllCosts, createCost, updateCost, deleteCost } from '../api/costApi';

const CostPage = () => {
    const [costs, setCosts] = useState([]);
    const [editingCost, setEditingCost] = useState(null);
    const [newCost, setNewCost] = useState({
        tourid: '',
        single_person_cost: '',
        child_with_bed_cost: '',
        child_without_bed_cost: ''
    });

    useEffect(() => {
        const fetchCosts = async () => {
            try {
                const data = await getAllCosts();
                setCosts(data);
            } catch (error) {
                console.error('Error fetching costs:', error);
            }
        };

        fetchCosts();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCost({
            ...newCost,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingCost) {
            try {
                await updateCost(editingCost.cost_id, newCost);
                setCosts(costs.map(cost => (cost.cost_id === editingCost.cost_id ? newCost : cost)));
                setEditingCost(null);
            } catch (error) {
                console.error('Error updating cost:', error);
            }
        } else {
            try {
                const createdCost = await createCost(newCost);
                setCosts([...costs, createdCost]);
            } catch (error) {
                console.error('Error creating cost:', error);
            }
        }
        setNewCost({
            tourid: '',
            single_person_cost: '',
            child_with_bed_cost: '',
            child_without_bed_cost: ''
        });
    };

    const handleEdit = (cost) => {
        setEditingCost(cost);
        setNewCost({
            tourid: cost.tourid,
            single_person_cost: cost.single_person_cost,
            child_with_bed_cost: cost.child_with_bed_cost,
            child_without_bed_cost: cost.child_without_bed_cost
        });
    };

    const handleDelete = async (id) => {
        try {
            await deleteCost(id);
            setCosts(costs.filter(cost => cost.cost_id !== id));
        } catch (error) {
            console.error('Error deleting cost:', error);
        }
    };

    return (
        <div>
            <h1>Cost Management</h1>

            <form onSubmit={handleSubmit}>
                <h2>{editingCost ? 'Edit Cost' : 'Add New Cost'}</h2>
                <label>
                    Tour ID:
                    <input
                        type="number"
                        name="tourid"
                        value={newCost.tourid}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Single Person Cost:
                    <input
                        type="number"
                        name="single_person_cost"
                        value={newCost.single_person_cost}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Child with Bed Cost:
                    <input
                        type="number"
                        name="child_with_bed_cost"
                        value={newCost.child_with_bed_cost}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Child without Bed Cost:
                    <input
                        type="number"
                        name="child_without_bed_cost"
                        value={newCost.child_without_bed_cost}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">{editingCost ? 'Update Cost' : 'Add Cost'}</button>
                {editingCost && (
                    <button
                        type="button"
                        onClick={() => {
                            setEditingCost(null);
                            setNewCost({
                                tourid: '',
                                single_person_cost: '',
                                child_with_bed_cost: '',
                                child_without_bed_cost: ''
                            });
                        }}
                    >
                        Cancel
                    </button>
                )}
            </form>

            <h2>Cost List</h2>
            <ul>
                {costs.map(cost => (
                    <li key={cost.cost_id}>
                        <strong>Tour ID:</strong> {cost.tourid}<br />
                        <strong>Single Person Cost:</strong> {cost.single_person_cost}<br />
                        <strong>Child with Bed Cost:</strong> {cost.child_with_bed_cost}<br />
                        <strong>Child without Bed Cost:</strong> {cost.child_without_bed_cost}<br />
                        <button onClick={() => handleEdit(cost)}>Edit</button>
                        <button onClick={() => handleDelete(cost.cost_id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CostPage;
