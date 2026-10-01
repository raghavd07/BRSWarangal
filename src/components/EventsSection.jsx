import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, Clock, MapPin, Tag, ChevronRight, X, 
  AlertCircle, Vote, CheckSquare, Info, ShieldAlert 
} from 'lucide-react';
import { upcomingEvents } from '../data/events';
import './EventsSection.css';

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all', 'elections', 'camps'

  const filteredEvents = upcomingEvents.filter((evt) => {
    if (filter === 'elections') return evt.isElection;
    if (filter === 'camps') return !evt.isElection;
    return true;
  });

  return (
    <section className="section-wrapper bg-pale" id="events" aria-label="Upcoming Events and Elections Preview">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pretitle">
            <Vote size={14} aria-hidden="true" />
            Elections & Public Schedules
          </span>
          <h2 className="section-title">Upcoming Elections & Events</h2>
          <p className="section-subtitle-telugu">రాబోయే ఎన్నికలు & నియోజకవర్గ కార్యక్రమాలు</p>
          <p className="section-description">
            Crucial schedules for upcoming Greater Warangal Municipal (GWMC) Ward Polls, Election Commission voter revision drives, and constituency assemblies.
          </p>
          <div className="section-divider" />
        </div>

        {/* Highlight Banner: Upcoming Elections Notice */}
        <div className="election-alert-banner">
          <div className="election-alert-left">
            <div className="election-icon-circle">
              <Vote size={26} />
            </div>
            <div>
              <span className="alert-pretitle">CONSTITUENCY ELECTION WATCH</span>
              <h3 className="alert-heading">Upcoming Greater Warangal Municipal (GWMC) Ward Elections</h3>
              <p className="alert-desc">
                Wards across Warangal West Assembly Constituency (వరంగల్ పశ్చిమ నియోజకవర్గం) are preparing for municipal body elections. Check your voter enrollment status, verify polling stations, and participate in local democracy.
              </p>
            </div>
          </div>
          <div className="election-alert-right">
            <span className="poll-badge">POLL NOTIFICATION STAGE</span>
            <span className="car-symbol-note">BRS Symbol: 🚗 CAR (కారు గుర్తు)</span>
          </div>
        </div>

        {/* Filter Switcher */}
        <div className="events-filter-bar">
          <button
            type="button"
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            <span>All Schedules ({upcomingEvents.length})</span>
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'elections' ? 'active' : ''}`}
            onClick={() => setFilter('elections')}
          >
            <Vote size={15} />
            <span>Upcoming Elections & Polls ({upcomingEvents.filter(e => e.isElection).length})</span>
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'camps' ? 'active' : ''}`}
            onClick={() => setFilter('camps')}
          >
            <Calendar size={15} />
            <span>Public Service Camps ({upcomingEvents.filter(e => !e.isElection).length})</span>
          </button>
        </div>

        {/* Event Cards Grid */}
        <div className="events-grid">
          {filteredEvents.map((evt) => (
            <motion.div
              key={evt.id}
              className={`event-card ${evt.isElection ? 'election-card-highlight' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.38 }}
              whileHover={{ y: -4 }}
            >
              {/* Event Date Badge on Left */}
              <div className={`event-date-box ${evt.isElection ? 'date-box-election' : ''}`}>
                <span className="event-month">{evt.month}</span>
                <span className="event-day">{evt.day}</span>
                <span className="event-year">{evt.year}</span>
              </div>

              {/* Event Main Content */}
              <div className="event-content">
                <div className="event-badge-row">
                  <span className={`event-category-badge ${evt.isElection ? 'badge-election' : ''}`}>
                    {evt.category}
                  </span>
                  {evt.isElection ? (
                    <span className="election-status-badge">
                      <CheckSquare size={11} />
                      <span>{evt.badge}</span>
                    </span>
                  ) : (
                    <span className="sample-badge">Sample Notice</span>
                  )}
                </div>

                <h3 className="event-title">{evt.title}</h3>
                <span className="event-telugu-title">{evt.teluguTitle}</span>

                <div className="event-details-list">
                  <div className="event-detail-item">
                    <Clock size={13} className="detail-icon" aria-hidden="true" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="event-detail-item">
                    <MapPin size={13} className="detail-icon" aria-hidden="true" />
                    <span>{evt.venue}</span>
                  </div>
                </div>

                <p className="event-description">{evt.description}</p>

                {evt.boothDetails && (
                  <div className="booth-brief">
                    <strong>Note:</strong> {evt.boothDetails}
                  </div>
                )}

                <div className="event-card-action">
                  <button
                    type="button"
                    className={`btn ${evt.isElection ? 'btn-primary' : 'btn-secondary'} btn-sm event-action-btn`}
                    onClick={() => setSelectedEvent(evt)}
                  >
                    <span>{evt.isElection ? 'View Election Details' : 'View Event Notice'}</span>
                    <ChevronRight size={14} aria-hidden="true" />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Event Notice Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              className="event-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="event-modal-title"
            >
              <motion.div
                className="event-modal-card"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="event-modal-header">
                  <div>
                    <span className={`badge-primary ${selectedEvent.isElection ? 'badge-election-pill' : ''}`}>
                      {selectedEvent.isElection ? 'Upcoming Election / Poll Event' : selectedEvent.category}
                    </span>
                    <h3 id="event-modal-title" className="event-modal-heading">{selectedEvent.title}</h3>
                    <p className="event-modal-telugu">{selectedEvent.teluguTitle}</p>
                  </div>
                  <button
                    type="button"
                    className="modal-close-btn"
                    onClick={() => setSelectedEvent(null)}
                    aria-label="Close event notice"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="event-modal-body">
                  <div className="event-modal-time-venue">
                    <div className="modal-info-row">
                      <strong>Scheduled Date & Time:</strong>
                      <span>{selectedEvent.date} • {selectedEvent.time}</span>
                    </div>
                    <div className="modal-info-row">
                      <strong>Venue / Polling Centers:</strong>
                      <span>{selectedEvent.venue}</span>
                    </div>
                    <div className="modal-info-row">
                      <strong>Organizing Authority:</strong>
                      <span>{selectedEvent.organizer}</span>
                    </div>
                    {selectedEvent.electionType && (
                      <div className="modal-info-row">
                        <strong>Election Classification:</strong>
                        <span>{selectedEvent.electionType}</span>
                      </div>
                    )}
                  </div>

                  <p className="modal-event-desc">{selectedEvent.description}</p>

                  {selectedEvent.isElection ? (
                    <div className="voter-guidelines-box">
                      <div className="voter-guide-title">
                        <Vote size={16} />
                        <span>Voter Awareness Checklist – Warangal West</span>
                      </div>
                      <ul>
                        <li>Verify your name in the electoral roll ahead of polling day.</li>
                        <li>Carry valid identification: Voter EPIC Card, Aadhaar Card, Driving License, or Passport.</li>
                        <li>Election Commission Toll-Free Helpline: <strong>1950</strong> for booth queries.</li>
                        <li>BRS Election Symbol: <strong>🚗 Car (కారు గుర్తు)</strong>.</li>
                      </ul>
                    </div>
                  ) : (
                    <div className="event-modal-warning">
                      <AlertCircle size={15} />
                      <span>This entry is a sample demonstration schedule. Actual events will be posted upon official coordination from party leadership.</span>
                    </div>
                  )}
                </div>

                <div className="event-modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => setSelectedEvent(null)}
                  >
                    Close Notice
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
